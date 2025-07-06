import { render } from '@testing-library/react'
import { redirect } from 'next/navigation'
import RootPage from './page'

// Mock des dépendances
jest.mock('next/navigation', () => ({
  redirect: jest.fn()
}))

jest.mock('../../i18n', () => ({
  defaultLocale: 'fr'
}))

const mockRedirect = redirect as jest.MockedFunction<typeof redirect>

describe('RootPage', () => {
  beforeEach(() => {
    mockRedirect.mockClear()
  })

  it('redirects to default locale', () => {
    render(<RootPage />)

    expect(mockRedirect).toHaveBeenCalledWith('/fr')
  })

  it('redirects only once', () => {
    render(<RootPage />)

    expect(mockRedirect).toHaveBeenCalledTimes(1)
  })
})
