import { render, screen } from '@testing-library/react'
import NotFound from './not-found'

// Mock des dépendances
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => (
    <img src={src} alt={alt} {...props} />
  )
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: any }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}))

describe('NotFound', () => {
  it('renders 404 error image', () => {
    render(<NotFound />)

    const errorImage = screen.getByAltText('404 Error')
    expect(errorImage).toBeInTheDocument()
    expect(errorImage).toHaveAttribute('src', '/error_404.png')
    expect(errorImage).toHaveAttribute('width', '400')
    expect(errorImage).toHaveAttribute('height', '400')
  })

  it('renders error message', () => {
    render(<NotFound />)

    expect(screen.getByText("Oops... Cette page n'existe pas")).toBeInTheDocument()
  })

  it('renders back to home link', () => {
    render(<NotFound />)

    const homeLink = screen.getByRole('link')
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('renders back to home button', () => {
    render(<NotFound />)

    const backButton = screen.getByRole('button', { name: /accueil/i })
    expect(backButton).toBeInTheDocument()
  })

  it('has correct page structure', () => {
    render(<NotFound />)

    const container = screen.getByText("Oops... Cette page n'existe pas").closest('.page404')
    expect(container).toBeInTheDocument()
  })

  it('renders html and body elements', () => {
    const { container } = render(<NotFound />)

    expect(container.querySelector('html')).toBeInTheDocument()
    expect(container.querySelector('body')).toBeInTheDocument()
  })

  it('sets correct lang attribute on html element', () => {
    const { container } = render(<NotFound />)

    const htmlElement = container.querySelector('html')
    expect(htmlElement).toHaveAttribute('lang', 'fr')
  })
})
