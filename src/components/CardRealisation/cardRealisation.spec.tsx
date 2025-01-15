import { render } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import React, { PropsWithChildren } from 'react'
import { CardRealisation, CardRealisationProps } from './CardRealisation'
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

const mockData: CardRealisationProps = {
  id: 1,
  title: 'Test Project',
  picture: '/test.png',
  content: 'This is a test project.',
  linkGithub: 'https://github.com/test/test-project',
  linkSite: 'https://test-project.com',
  group: '3',
  time: '2 weeks',
  problematique: 'Test problematique',
  linkGithubBack: 'https://github.com/test/test-project-backend'
}

describe('CardRealisation Component', () => {
  it('renders the title', () => {
    const { getByText } = render(<CardRealisation {...mockData} />, { wrapper })
    expect(getByText('Test Project')).toBeVisible()
    expect(getByText(': 3')).toBeVisible()
    expect(getByText(': 2 weeks')).toBeVisible()
    expect(getByText('This is a test project.')).toBeVisible()
    expect(getByText('Problématique : Test problematique')).toBeVisible()
    expect(getByText('Front-End')).toBeVisible()
    expect(getByText('Back-End')).toBeVisible()
  })
})
