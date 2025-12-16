#!/usr/bin/env node
import { readdir, stat, mkdir, access } from 'fs/promises'
import { join, parse } from 'path'
import sharp from 'sharp'

const PUBLIC_DIR = './public'
const SRC_IMAGES_DIRS = ['./src/components/CardHomepage', './src/components/Description']

const MIN_SIZE_KB = 50 // Only compress images > 50KB

async function compressImage(inputPath, outputPath) {
  try {
    const metadata = await sharp(inputPath).metadata()
    const isLargeImage = metadata.width > 800 || metadata.height > 800

    await sharp(inputPath)
      .webp({
        quality: isLargeImage ? 75 : 85,
        effort: 6
      })
      .toFile(outputPath)

    const inputStats = await stat(inputPath)
    const outputStats = await stat(outputPath)
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1)

    console.log(
      `✅ ${inputPath} → ${outputPath} (${(inputStats.size / 1024).toFixed(0)}KB → ${(outputStats.size / 1024).toFixed(0)}KB, -${savings}%)`
    )
  } catch (error) {
    console.error(`❌ Error compressing ${inputPath}:`, error.message)
  }
}

async function processDirectory(dir) {
  try {
    await access(dir)
  } catch {
    console.log(`⏭️  Skipping ${dir} (not found)`)
    return
  }

  const files = await readdir(dir)

  for (const file of files) {
    const filePath = join(dir, file)
    const fileStat = await stat(filePath)

    if (fileStat.isDirectory()) {
      continue
    }

    const ext = parse(file).ext.toLowerCase()
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
      continue
    }

    const sizeKB = fileStat.size / 1024
    if (sizeKB < MIN_SIZE_KB) {
      console.log(`⏭️  Skipping ${file} (${sizeKB.toFixed(0)}KB < ${MIN_SIZE_KB}KB threshold)`)
      continue
    }

    const outputPath = join(dir, `${parse(file).name}.webp`)
    await compressImage(filePath, outputPath)
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n')

  // Process public directory
  await processDirectory(PUBLIC_DIR)

  // Process src component directories
  for (const dir of SRC_IMAGES_DIRS) {
    await processDirectory(dir)
  }

  console.log('\n✨ Done!')
}

main()
