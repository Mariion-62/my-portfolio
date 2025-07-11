import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { NextIntlClientProvider } from 'next-intl'
import React, { PropsWithChildren } from 'react'
import { CardHalloween } from '../CardHalloween/CardHalloween'
import messages from '@/dictionnary/fr.json'

const wrapper = ({ children }: PropsWithChildren) => (
  <NextIntlClientProvider locale="fr" messages={messages} timeZone="Europe/Paris">
    {children}
  </NextIntlClientProvider>
)

describe('CardHalloween', () => {
  it('should render component CardHallowen correctly', async () => {
    const handleClick = jest.fn()
    render(
      <CardHalloween
        title={'Test'}
        answer={'Test Response'}
        linkMusic={'Test Link'}
        isAswerVisible={false}
        onAnswerClick={handleClick}
      />,
      { wrapper }
    )
    expect(screen.getByText('Test')).toBeVisible()
    expect(screen.getByText('halloween.answer')).toBeVisible()
    expect(screen.queryByText('Test Response')).toBeNull()
  })

  it('should render answer when user click on button answer', async () => {
    const handleClick = jest.fn()
    render(
      <CardHalloween
        title={'Test'}
        answer={'Test Response'}
        linkMusic={'Test Link'}
        isAswerVisible={true}
        onAnswerClick={handleClick}
      />,
      { wrapper }
    )
    expect(screen.getByText('Test')).toBeVisible()
    expect(screen.getByRole('button', { name: 'halloween.answer' })).toBeVisible()

    userEvent.click(screen.getByRole('button', { name: 'halloween.answer' }))

    expect(screen.getByText('Test Response')).toBeVisible()
  })
})
