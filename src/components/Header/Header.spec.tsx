import { render, screen } from '@testing-library/react'
import { Header } from './Header'

// Mock de next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ priority, ...props }: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  }
}))

// Mock des composants spécifiques
jest.mock('../MenuBurger/MenuBurger', () => ({
  MenuBurger: () => <div data-testid="menu-burger">Menu Burger</div>
}))

jest.mock('../Navigation/Navigation', () => ({
  Navigation: () => <div data-testid="navigation">Navigation</div>
}))

jest.mock('@/src/utils/ChangeLogoWithDate', () => ({
  __esModule: true,
  default: () => <div data-testid="logo">Logo</div>
}))

describe('Header', () => {
  it('renders header with logo and navigation', () => {
    render(<Header />)

    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(screen.getByTestId('navigation')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Header />)

    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    const githubLink = screen.getByRole('link', { name: /github/i })

    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/mariongrolleau/')
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Mariion-62')
  })

  it('renders header link with correct locale', () => {
    render(<Header />)

    const headerLink = screen.getByRole('link', { name: /logo/i })
    expect(headerLink).toHaveAttribute('href', '/fr')
  })
})
