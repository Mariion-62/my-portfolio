import { render, screen } from '@testing-library/react'
import { Description } from './Description'

// Mock des dépendances
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => (
    <img src={src} alt={alt} {...props} />
  )
}))

// Mock des images statiques
jest.mock('./avatar.webp', () => '/avatar.webp')
jest.mock('./ordi.webp', () => '/ordi.webp')

describe('Description', () => {
  beforeEach(() => {
    // Mock de la date pour avoir un âge cohérent
    const mockDate = new Date('2025-07-06')
    const originalDate = global.Date
    global.Date = jest.fn(() => mockDate) as any
    global.Date.now = jest.fn(() => mockDate.getTime())
    global.Date.UTC = originalDate.UTC
    global.Date.parse = originalDate.parse
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders description text', () => {
    render(<Description />)

    // Vérifier que le conteneur contient le texte
    const container = document.querySelector('.contentDescription')
    expect(container).toBeInTheDocument()
    expect(container?.textContent).toContain(
      "Je m’appelle Marion, j’ai 55 ans. J’ai travaillé pendant 10 ans dans le domaine du sport adapté. J’ai décidé de faire une reconversion dans le domaine de l’IT pour me donner un nouveau challenge et m' épanouir en tant que développeuse."
    )
  })

  it('renders avatar image', () => {
    render(<Description />)

    const avatarImage = screen.getByAltText(/avatar marion/i)
    expect(avatarImage).toBeInTheDocument()
    expect(avatarImage).toHaveAttribute('width', '300')
    expect(avatarImage).toHaveAttribute('height', '300')
  })

  it('renders computer icon', () => {
    render(<Description />)

    const computerIcon = screen.getByAltText(/icone ordi/i)
    expect(computerIcon).toBeInTheDocument()
    expect(computerIcon).toHaveAttribute('width', '600')
    expect(computerIcon).toHaveAttribute('height', '600')
  })

  it('has correct container structure', () => {
    render(<Description />)

    const container = document.querySelector('.containerDescription')
    expect(container).toBeInTheDocument()
  })
})
