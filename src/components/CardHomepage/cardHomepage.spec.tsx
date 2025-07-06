import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { PropsWithChildren } from 'react'
import { CardHomepage } from './CardHomepage'
import messages from '@/dictionnary/fr.json'
import '@testing-library/jest-dom'

const wrapper = ({ children }: PropsWithChildren) => (
  <NextIntlClientProvider locale="fr" messages={messages} timeZone="Europe/Paris">
    {children}
  </NextIntlClientProvider>
)

jest.mock('next/link', () => {
  const MockLink: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => {
    return <a href={href}>{children}</a> // Mock de `Link` pour simplifier
  }
  MockLink.displayName = 'MockLink'
  return MockLink
})

describe('CardHomepage', () => {
  it('should render component CardHomepage correctly', async () => {
    render(<CardHomepage />, { wrapper })
    expect(screen.getByText('Parcours')).toBeVisible()
    expect(screen.getByText('Projets')).toBeVisible()
  })
  it('should good page when user click on link careers', async () => {
    render(<CardHomepage />, { wrapper })
    const link = screen.getByRole('link', { name: /parcours/i })
    expect(link).toBeVisible()
    expect(link).toHaveAttribute('href', 'fr/mon-parcours')
  })

  it('should good page when user click on link project', async () => {
    render(<CardHomepage />, { wrapper })
    const link = screen.getByRole('link', { name: /projets/i })
    expect(link).toBeVisible()
    expect(link).toHaveAttribute('href', 'fr/mes-realisations')
  })
})
