import { render, screen, fireEvent } from '@testing-library/react'
import { useLocale, useTranslations } from 'next-intl'
import { MenuBurger } from './MenuBurger'

// Mock des dépendances
jest.mock('next-intl', () => ({
  useLocale: jest.fn(),
  useTranslations: jest.fn()
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

describe('MenuBurger', () => {
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

  it('renders burger button when menu is closed', () => {
    render(<MenuBurger />)

    const openButton = screen.getByRole('button', { name: /ouvrir le menu/i })
    expect(openButton).toBeInTheDocument()
    expect(openButton).toHaveTextContent('☰')
  })

  it('opens menu when burger button is clicked', () => {
    render(<MenuBurger />)

    const openButton = screen.getByRole('button', { name: /ouvrir le menu/i })
    fireEvent.click(openButton)

    expect(screen.getByRole('button', { name: /fermer le menu/i })).toBeInTheDocument()
    expect(screen.getByText('Accueil')).toBeInTheDocument()
    expect(screen.getByText('Parcours')).toBeInTheDocument()
    expect(screen.getByText('Projets')).toBeInTheDocument()
  })

  it('closes menu when close button is clicked', () => {
    render(<MenuBurger />)

    // Ouvrir le menu
    const openButton = screen.getByRole('button', { name: /ouvrir le menu/i })
    fireEvent.click(openButton)

    // Fermer le menu
    const closeButton = screen.getByRole('button', { name: /fermer le menu/i })
    fireEvent.click(closeButton)

    expect(screen.getByRole('button', { name: /ouvrir le menu/i })).toBeInTheDocument()
    expect(screen.queryByText('Accueil')).not.toBeInTheDocument()
  })

  it('closes menu when navigation link is clicked', () => {
    render(<MenuBurger />)

    // Ouvrir le menu
    const openButton = screen.getByRole('button', { name: /ouvrir le menu/i })
    fireEvent.click(openButton)

    // Cliquer sur un lien de navigation
    const homeLink = screen.getByRole('link', { name: /accueil/i })
    fireEvent.click(homeLink)

    expect(screen.getByRole('button', { name: /ouvrir le menu/i })).toBeInTheDocument()
  })

  it('renders navigation links with correct locale', () => {
    mockUseLocale.mockReturnValue('en')
    render(<MenuBurger />)

    const openButton = screen.getByRole('button', { name: /ouvrir le menu/i })
    fireEvent.click(openButton)

    const homeLink = screen.getByRole('link', { name: /accueil/i })
    expect(homeLink).toHaveAttribute('href', '/en/home')
  })
})
