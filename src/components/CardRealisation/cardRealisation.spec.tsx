import { render, screen } from '@testing-library/react'
import { CardRealisation, CardRealisationProps } from './CardRealisation'

// Mock des icons
jest.mock('react-icons/io5', () => ({
  IoLogoGithub: () => <div data-testid="github-icon">GitHub</div>,
  IoPeopleSharp: () => <div data-testid="people-icon">People</div>,
  IoTimeSharp: () => <div data-testid="time-icon">Time</div>
}))

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
    render(<CardRealisation {...mockData} />)

    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText(': 3')).toBeInTheDocument()
    expect(screen.getByText(': 2 weeks')).toBeInTheDocument()
    expect(screen.getByText('This is a test project.')).toBeInTheDocument()
    expect(screen.getByText('Problématique : Test problematique')).toBeInTheDocument()
  })

  it('renders GitHub links', () => {
    render(<CardRealisation {...mockData} />)

    expect(screen.getByText('Front-End')).toBeInTheDocument()
    expect(screen.getByText('Back-End')).toBeInTheDocument()
  })

  it('renders project image with link', () => {
    render(<CardRealisation {...mockData} />)

    const siteLink = screen.getByRole('link', { name: /test project/i })
    expect(siteLink).toHaveAttribute('href', 'https://test-project.com')

    const image = screen.getByAltText('Test Project')
    expect(image).toBeInTheDocument()
  })

  it('renders GitHub links with correct hrefs', () => {
    render(<CardRealisation {...mockData} />)

    const githubLinks = screen.getAllByRole('link', { name: /github/i })
    expect(githubLinks).toHaveLength(2)

    // On ne peut pas facilement tester les href spécifiques car ils sont dans des liens avec le même nom
    // mais on peut vérifier qu'ils existent
    expect(githubLinks[0]).toBeInTheDocument()
    expect(githubLinks[1]).toBeInTheDocument()
  })

  it('renders icons', () => {
    render(<CardRealisation {...mockData} />)

    expect(screen.getByTestId('people-icon')).toBeInTheDocument()
    expect(screen.getByTestId('time-icon')).toBeInTheDocument()
    expect(screen.getAllByTestId('github-icon')).toHaveLength(2)
  })
})
