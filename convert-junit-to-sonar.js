// filepath: /home/marion/Code-Sources/projectsPerso/my-portfolio/convert-junit-to-sonar.js
import fs from 'fs'
import xml2js from 'xml2js'

const inputFile = 'coverage/test-report.xml'
const outputFile = 'coverage/sonar-test-report.xml'

fs.readFile(inputFile, (err, data) => {
  if (err) {
    console.error(`Error reading file ${inputFile}:`, err)
    process.exit(1)
  }

  xml2js.parseString(data, (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err)
      process.exit(1)
    }

    const testExecutions = {
      testExecutions: {
        $: { version: '1' },
        file: []
      }
    }

    result.testsuites.testsuite.forEach((suite) => {
      suite.testcase.forEach((testcase) => {
        const filePath = testcase.$.classname.replace(/\./g, '/') + '.js'
        const testCase = {
          name: testcase.$.name,
          duration: Math.round(parseFloat(testcase.$.time) * 1000)
        }

        let fileEntry = testExecutions.testExecutions.file.find((f) => f.$.path === filePath)
        if (!fileEntry) {
          fileEntry = { $: { path: filePath }, testCase: [] }
          testExecutions.testExecutions.file.push(fileEntry)
        }

        fileEntry.testCase.push(testCase)
      })
    })

    const builder = new xml2js.Builder()
    const xml = builder.buildObject(testExecutions)

    fs.writeFile(outputFile, xml, (err) => {
      if (err) {
        console.error(`Error writing file ${outputFile}:`, err)
        process.exit(1)
      }

      console.log(`Converted JUnit report to SonarQube generic format: ${outputFile}`)
    })
  })
})
