import { render, screen } from '@testing-library/react'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { Navigation } from './Navigation'

// Mock des dépendances
jest.mock('next-intl', () => ({
  useLocale: jest.fn(),
  useTranslations: jest.fn()
}))

jest.mock('next/navigation', () => ({
  usePathname: jest.fn()
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: any }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}))

jest.mock('@/types/menu', () => ({
  navElements: [
    { label: 'navigation.home', link: '/home' },
    { label: 'navigation.careers', link: '/careers' },
    { label: 'navigation.project', link: '/projects' }
  ]
}))

const mockUseLocale = useLocale as jest.MockedFunction<typeof useLocale>
const mockUseTranslations = useTranslations as jest.MockedFunction<typeof useTranslations>
const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>

describe('Navigation', () => {
  const mockT = jest.fn()

  beforeEach(() => {
    mockUseLocale.mockReturnValue('fr')
    mockUseTranslations.mockReturnValue(
      Object.assign(mockT, {
        rich: jest.fn((key: string, ..._args: any[]) => mockT(key)),
        markup: jest.fn((key: string, ..._args: any[]) => mockT(key)),
        raw: jest.fn((key: string, ..._args: any[]) => mockT(key)),
        has: jest.fn((_key: string, ..._args: any[]) => true)
      })
    )
    mockUsePathname.mockReturnValue('/home')

    mockT.mockImplementation((key: string) => {
      const translations: Record<string, string> = {
        'navigation.home': 'Accueil',
        'navigation.careers': 'Parcours',
        'navigation.project': 'Projets'
      }
      return translations[key] || key
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders navigation with all links', () => {
    render(<Navigation />)

    expect(screen.getByRole('link', { name: /accueil/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /parcours/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /projets/i })).toBeInTheDocument()
  })

  it('renders links with correct locale', () => {
    mockUseLocale.mockReturnValue('en')
    render(<Navigation />)

    const homeLink = screen.getByRole('link', { name: /accueil/i })
    expect(homeLink).toHaveAttribute('href', '/en/home')
  })

  it('applies active class to current page', () => {
    mockUsePathname.mockReturnValue('/home')
    render(<Navigation />)

    const homeLink = screen.getByRole('link', { name: /accueil/i })
    expect(homeLink.parentElement).toHaveClass('active')
  })

  it('does not apply active class to non-current pages', () => {
    mockUsePathname.mockReturnValue('/careers')
    render(<Navigation />)

    const homeLink = screen.getByRole('link', { name: /accueil/i })
    const careersLink = screen.getByRole('link', { name: /parcours/i })

    expect(homeLink.parentElement).not.toHaveClass('active')
    expect(careersLink.parentElement).toHaveClass('active')
  })
})
