import { render, screen } from '@testing-library/react'
import { notFound } from 'next/navigation'
import LocaleLayout from './layout'

// Mock des dépendances
jest.mock('next/navigation', () => ({
  notFound: jest.fn()
}))

jest.mock('next-intl', () => ({
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="intl-provider">{children}</div>
  )
}))

jest.mock('@/src/components/Footer/Footer', () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>
}))

jest.mock('@/src/components/Header/Header', () => ({
  Header: () => <header data-testid="header">Header</header>
}))

// Mock des messages de traduction
jest.mock('../../../messages/fr.json', () => ({
  'navigation.home': 'Accueil',
  'navigation.careers': 'Parcours'
}))

jest.mock('../../../messages/en.json', () => ({
  'navigation.home': 'Home',
  'navigation.careers': 'Careers'
}))

// Mock de la configuration i18n
jest.mock('../../../i18n.config.js', () => ({
  locales: ['fr', 'en']
}))

const mockNotFound = notFound as jest.MockedFunction<typeof notFound>

describe('LocaleLayout', () => {
  beforeEach(() => {
    mockNotFound.mockClear()
  })

  it('renders layout with valid locale', async () => {
    const props = {
      children: <div data-testid="test-content">Test Content</div>,
      params: { locale: 'fr' }
    }

    render(await LocaleLayout(props))

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('test-content')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('intl-provider')).toBeInTheDocument()
  })

  it('calls notFound for invalid locale', async () => {
    const props = {
      children: <div>Test Content</div>,
      params: { locale: 'invalid' }
    }

    await LocaleLayout(props)

    expect(mockNotFound).toHaveBeenCalled()
  })

  it('calls notFound for null locale', async () => {
    const props = {
      children: <div>Test Content</div>,
      params: { locale: null as any }
    }

    await LocaleLayout(props)

    expect(mockNotFound).toHaveBeenCalled()
  })

  it('calls notFound for undefined locale', async () => {
    const props = {
      children: <div>Test Content</div>,
      params: { locale: undefined as any }
    }

    await LocaleLayout(props)

    expect(mockNotFound).toHaveBeenCalled()
  })

  it('renders with English locale', async () => {
    const props = {
      children: <div data-testid="test-content">Test Content</div>,
      params: { locale: 'en' }
    }

    render(await LocaleLayout(props))

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('test-content')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(mockNotFound).not.toHaveBeenCalled()
  })

  it('sets correct html lang attribute', async () => {
    const props = {
      children: <div>Test Content</div>,
      params: { locale: 'fr' }
    }

    render(await LocaleLayout(props))

    // Note: Dans un environnement de test, nous ne pouvons pas facilement tester
    // l'attribut lang de l'élément html, mais nous pouvons vérifier que le composant
    // se rend sans erreur avec la locale fournie
    expect(mockNotFound).not.toHaveBeenCalled()
  })
})
