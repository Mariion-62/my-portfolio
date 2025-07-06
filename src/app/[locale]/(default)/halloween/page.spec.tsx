import { render, screen } from '@testing-library/react'
import Page from './page'

// Mock des dépendances
jest.mock('./ui/Halloween', () => ({
  __esModule: true,
  default: () => <div data-testid="halloween">Halloween Component</div>
}))

describe('Halloween Page', () => {
  it('renders Halloween component', () => {
    render(<Page />)

    expect(screen.getByTestId('halloween')).toBeInTheDocument()
  })
})
