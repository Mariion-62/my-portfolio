import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

export function setup(jsx, args) {
  return {
    user: userEvent.setup(),
    ...render(jsx, args)
  }
}

// Mock global pour next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }) => React.createElement('img', { src, alt, ...props })
}))

// Mock global pour next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...props }) => React.createElement('a', { href, ...props }, children)
}))

// Mock global pour next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn()
  })),
  redirect: jest.fn(),
  notFound: jest.fn()
}))

// Mock global pour next-intl
jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => (key, params) => {
    const defaultTranslations = {
      'navigation.home': 'Accueil',
      'navigation.careers': 'Parcours',
      'navigation.project': 'Projets',
      'footer.legal_notice': 'Mentions légales',
      'footer.copyright': `Copyright © ${params?.currentYear || 2025} Marion Grolleau. Tous droits réservés.`,
      'exp_careers.title_exp': 'Expérience professionnelle',
      'halloween.title_page': 'Halloween - Devine la musique',
      'halloween.previous_button': 'Précédent',
      'halloween.next_button': 'Suivant'
    }
    return defaultTranslations[key] || key
  }),
  useLocale: jest.fn(() => 'fr'),
  NextIntlClientProvider: ({ children }) => React.createElement('div', { 'data-testid': 'intl-provider' }, children)
}))

// Mock global pour react-icons
jest.mock('react-icons/io5', () => ({
  IoMailOutline: ({ size }) =>
    React.createElement(
      'svg',
      { 'data-testid': 'mail-icon', width: size, height: size },
      React.createElement('title', null, 'Mail Icon')
    )
}))

// Configuration globale pour les tests
beforeEach(() => {
  // Reset des mocks pour chaque test
  jest.clearAllMocks()

  // Configuration par défaut de window.innerWidth
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1024
  })
})
