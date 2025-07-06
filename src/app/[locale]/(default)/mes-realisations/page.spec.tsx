import { render, screen } from '@testing-library/react'
import Page from './page'

// Mock des dépendances
jest.mock('./ui/Realisations', () => ({
  Realisations: () => <div data-testid="realisations">Realisations Component</div>
}))

describe('Mes Réalisations Page', () => {
  it('renders Realisations component', () => {
    render(<Page />)

    expect(screen.getByTestId('realisations')).toBeInTheDocument()
  })
})
