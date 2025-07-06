import { render, screen } from '@testing-library/react'
import Page from './page'

// Mock des dépendances
jest.mock('./ui/Parcours', () => ({
  __esModule: true,
  default: () => <div data-testid="parcours">Parcours Component</div>
}))

describe('Mon Parcours Page', () => {
  it('renders Parcours component', () => {
    render(<Page />)

    expect(screen.getByTestId('parcours')).toBeInTheDocument()
  })
})
