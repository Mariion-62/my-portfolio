import { render, screen } from '@testing-library/react'
import { useTranslations } from 'next-intl'
import { Footer } from './Footer'

// Mock des dépendances
jest.mock('next-intl', () => ({
  useTranslations: jest.fn()
}))

jest.mock('react-icons/io5', () => ({
  IoMailOutline: ({ size }: { size: number }) => (
    <svg data-testid="mail-icon" width={size} height={size}>
      <title>Mail Icon</title>
    </svg>
  )
}))

const mockUseTranslations = useTranslations as jest.MockedFunction<typeof useTranslations>

describe('Footer', () => {
  const mockT = jest.fn((key: string, params?: any) => {
    const translations: Record<string, string> = {
      'footer.legal_notice': 'Mentions légales',
      'footer.copyright': `Copyright © ${params?.currentYear || 2025} Marion Grolleau. Tous droits réservés.`
    }
    return translations[key] || key
  }) as any

  beforeEach(() => {
    // Provide all required methods for the translation object
    mockUseTranslations.mockReturnValue(
      Object.assign(mockT, {
        rich: jest.fn((key: string) => mockT(key)),
        markup: jest.fn((key: string) => mockT(key)),
        raw: jest.fn((key: string) => mockT(key)),
        has: jest.fn((_key: string) => true)
      })
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders legal notice', () => {
    render(<Footer />)

    expect(screen.getByText('Mentions légales')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)

    expect(screen.getByText(/copyright © 2025 marion grolleau/i)).toBeInTheDocument()
  })

  it('renders email contact link', () => {
    render(<Footer />)

    const mailLink = screen.getByRole('link', { name: /mail de marion/i })
    expect(mailLink).toBeInTheDocument()
    expect(mailLink).toHaveAttribute('href', 'mailto:mariongrolleau@neuf.fr')
    expect(mailLink).toHaveAttribute('target', '_blank')
    expect(mailLink).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders mail icon', () => {
    render(<Footer />)

    const mailIcon = screen.getByTestId('mail-icon')
    expect(mailIcon).toBeInTheDocument()
    expect(mailIcon).toHaveAttribute('width', '30')
    expect(mailIcon).toHaveAttribute('height', '30')
  })

  it('calls translation function with correct keys', () => {
    render(<Footer />)

    expect(mockT).toHaveBeenCalledWith('footer.legal_notice')
    expect(mockT).toHaveBeenCalledWith('footer.copyright', { currentYear: new Date().getFullYear() })
  })
})
