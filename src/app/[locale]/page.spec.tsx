import { render, screen } from '@testing-library/react'
import Page from './page'

// Mock des dépendances
jest.mock('@/src/components/CardHomepage/CardHomepage', () => ({
  CardHomepage: () => <div data-testid="card-homepage">Card Homepage</div>
}))

jest.mock('@/src/components/Description/Description', () => ({
  Description: () => <div data-testid="description">Description</div>
}))

describe('Page', () => {
  it('renders Description component', () => {
    render(<Page />)

    expect(screen.getByTestId('description')).toBeInTheDocument()
  })

  it('renders CardHomepage component', () => {
    render(<Page />)

    expect(screen.getByTestId('card-homepage')).toBeInTheDocument()
  })

  it('renders both components in correct order', () => {
    render(<Page />)

    const description = screen.getByTestId('description')
    const cardHomepage = screen.getByTestId('card-homepage')

    expect(description).toBeInTheDocument()
    expect(cardHomepage).toBeInTheDocument()

    // Vérifier que Description apparaît avant CardHomepage dans le DOM
    expect(description.compareDocumentPosition(cardHomepage)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
  })
})
