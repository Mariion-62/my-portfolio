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
    expect(screen.getByText('Mon parcours')).toBeVisible()
    expect(screen.getByText('Mes réalisations')).toBeVisible()
  })
  it('should good page when user click on link careers', async () => {
    render(<CardHomepage />, { wrapper })
    const link = screen.getByRole('link', { name: 'Mon parcours Mon parcours' })
    expect(link).toBeVisible()

    // Vérifiez que le href du lien est correct
    expect(link).toHaveAttribute('href', '/mon-parcours')

    expect(link).toBeVisible()

    // Vérifiez que le href du lien est correct
    expect(link).toHaveAttribute('href', '/mon-parcours')
  })
  it('should good page when user click on link project', async () => {
    render(<CardHomepage />, { wrapper })
    const link = screen.getByRole('link', { name: 'Mes réalisations Mes réalisations' })
    expect(link).toBeVisible()

    // Vérifiez que le href du lien est correct
    expect(link).toHaveAttribute('href', '/mes-realisations')
  })
})
