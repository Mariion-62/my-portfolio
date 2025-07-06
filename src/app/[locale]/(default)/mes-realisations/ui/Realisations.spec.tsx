import { render, screen } from '@testing-library/react'
import { Realisations } from './Realisations'

// Mock des dépendances
jest.mock('@/src/components/CardRealisation/CardRealisation', () => ({
  CardRealisation: ({ title, id }: { title: string; id: number }) => (
    <div data-testid={`card-realisation-${id}`}>
      <h3>{title}</h3>
    </div>
  ),
  dataRealisation: [
    {
      id: 1,
      title: 'Projet Test 1',
      picture: '/test1.jpg',
      content: 'Contenu test 1',
      linkGithub: 'https://github.com/test1',
      linkGithubBack: 'https://github.com/test1-back',
      linkSite: 'https://test1.com',
      group: 'Groupe test 1',
      time: '2023',
      problematique: 'Problématique test 1'
    },
    {
      id: 3,
      title: 'Projet Test 3',
      picture: '/test3.jpg',
      content: 'Contenu test 3',
      linkGithub: 'https://github.com/test3',
      linkGithubBack: 'https://github.com/test3-back',
      linkSite: 'https://test3.com',
      group: 'Groupe test 3',
      time: '2024',
      problematique: 'Problématique test 3'
    },
    {
      id: 2,
      title: 'Projet Test 2',
      picture: '/test2.jpg',
      content: 'Contenu test 2',
      linkGithub: 'https://github.com/test2',
      linkGithubBack: 'https://github.com/test2-back',
      linkSite: 'https://test2.com',
      group: 'Groupe test 2',
      time: '2023',
      problematique: 'Problématique test 2'
    }
  ]
}))

describe('Realisations', () => {
  it('renders all realisations', () => {
    render(<Realisations />)

    expect(screen.getByTestId('card-realisation-1')).toBeInTheDocument()
    expect(screen.getByTestId('card-realisation-2')).toBeInTheDocument()
    expect(screen.getByTestId('card-realisation-3')).toBeInTheDocument()
  })

  it('renders realisations sorted by id in descending order', () => {
    render(<Realisations />)

    const cards = screen.getAllByTestId(/card-realisation-/)

    // Vérifier que les cartes sont dans l'ordre décroissant par ID
    expect(cards[0]).toHaveAttribute('data-testid', 'card-realisation-3')
    expect(cards[1]).toHaveAttribute('data-testid', 'card-realisation-2')
    expect(cards[2]).toHaveAttribute('data-testid', 'card-realisation-1')
  })

  it('renders project titles', () => {
    render(<Realisations />)

    expect(screen.getByText('Projet Test 1')).toBeInTheDocument()
    expect(screen.getByText('Projet Test 2')).toBeInTheDocument()
    expect(screen.getByText('Projet Test 3')).toBeInTheDocument()
  })

  it('has correct container class', () => {
    const { container } = render(<Realisations />)

    expect(container.firstChild).toHaveClass('realisation')
  })
})
