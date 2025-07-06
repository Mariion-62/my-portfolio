import { render, screen } from '@testing-library/react'
import ChangeLogoWithDate from './ChangeLogoWithDate'

// Mock des dépendances
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => (
    <img src={src} alt={alt} {...props} />
  )
}))

describe('ChangeLogoWithDate', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders default logo for regular dates', () => {
    // Mock d'une date normale (mars)
    const mockDate = new Date('2025-03-15')
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate)

    render(<ChangeLogoWithDate />)

    const logoImage = screen.getByAltText(/logo/i)
    expect(logoImage).toBeInTheDocument()
    expect(logoImage).toHaveAttribute('src', '/logo.png')
    expect(logoImage).toHaveAttribute('width', '130')
    expect(logoImage).toHaveAttribute('height', '130')
  })

  it('renders Halloween logo during Halloween period', () => {
    // Mock d'une date Halloween (25 octobre)
    const mockDate = new Date('2025-10-25')
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate)

    render(<ChangeLogoWithDate />)

    const logoImage = screen.getByAltText(/logo/i)
    expect(logoImage).toHaveAttribute('src', '/logo_halloween.png')
  })

  it('renders Halloween logo on Halloween start date (October 15)', () => {
    const mockDate = new Date('2025-10-15')
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate)

    render(<ChangeLogoWithDate />)

    const logoImage = screen.getByAltText(/logo/i)
    expect(logoImage).toHaveAttribute('src', '/logo_halloween.png')
  })

  it('renders Halloween logo on Halloween end date (October 31)', () => {
    const mockDate = new Date('2025-10-31')
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate)

    render(<ChangeLogoWithDate />)

    const logoImage = screen.getByAltText(/logo/i)
    expect(logoImage).toHaveAttribute('src', '/logo_halloween.png')
  })

  it('renders Christmas logo during Christmas period', () => {
    // Mock d'une date de Noël (15 décembre)
    const mockDate = new Date('2025-12-15')
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate)

    render(<ChangeLogoWithDate />)

    const logoImage = screen.getByAltText(/logo/i)
    expect(logoImage).toHaveAttribute('src', '/logo_noel.png')
  })

  it('renders Christmas logo on December 1st', () => {
    const mockDate = new Date('2025-12-01')
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate)

    render(<ChangeLogoWithDate />)

    const logoImage = screen.getByAltText(/logo/i)
    expect(logoImage).toHaveAttribute('src', '/logo_noel.png')
  })

  it('renders Christmas logo on December 31st', () => {
    const mockDate = new Date('2025-12-31')
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate)

    render(<ChangeLogoWithDate />)

    const logoImage = screen.getByAltText(/logo/i)
    expect(logoImage).toHaveAttribute('src', '/logo_noel.png')
  })
})
