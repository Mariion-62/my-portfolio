import Image from 'next/image'
import { ReactElement } from 'react'

function getLogoForDate(): string {
  const now = new Date()
  const month = now.getMonth()

  if (month === 9) {
    // Halloween: October
    return '/logo_halloween.webp'
  } else if (month === 11) {
    // Christmas: December
    return '/logo_noel.webp'
  }
  return '/logo.webp'
}

function ChangeLogoWithDate(): ReactElement {
  const logo = getLogoForDate()

  return (
    <div>
      <Image src={logo} alt="logo" width={130} height={130} priority />
    </div>
  )
}

export default ChangeLogoWithDate
