import { render, screen } from '@testing-library/react'
import { useTranslations } from 'next-intl'
import Parcours from './Parcours'

// Mock des dépendances
jest.mock('next-intl', () => ({
  useTranslations: jest.fn()
}))

jest.mock('@/src/components/CardParcours/CardParcours', () => ({
  CardParcours: ({ job, enterprise, id }: { job: string; enterprise: string; id: string }) => (
    <div data-testid={`card-parcours-${id}`}>
      <h3>{job}</h3>
      <p>{enterprise}</p>
    </div>
  ),
  dataParcours: [
    {
      id: '2023-01-01',
      dateBegin: '2023-01-01',
      dateEnd: '2023-06-01',
      job: 'Développeur Frontend',
      enterprise: 'Entreprise A',
      experience: 'Expérience A',
      picture: '/entreprise-a.jpg',
      expTwo: 'Expérience 2',
      expThree: 'Expérience 3',
      expFour: 'Expérience 4',
      expFive: 'Expérience 5'
    },
    {
      id: '2024-01-01',
      dateBegin: '2024-01-01',
      dateEnd: '2024-06-01',
      job: 'Développeur Fullstack',
      enterprise: 'Entreprise B',
      experience: 'Expérience B',
      picture: '/entreprise-b.jpg',
      expTwo: 'Expérience 2',
      expThree: 'Expérience 3',
      expFour: 'Expérience 4',
      expFive: 'Expérience 5'
    },
    {
      id: '2022-01-01',
      dateBegin: '2022-01-01',
      dateEnd: '2022-06-01',
      job: 'Stagiaire',
      enterprise: 'Entreprise C',
      experience: 'Expérience C',
      picture: '/entreprise-c.jpg',
      expTwo: 'Expérience 2',
      expThree: 'Expérience 3',
      expFour: 'Expérience 4',
      expFive: 'Expérience 5'
    }
  ]
}))

const mockUseTranslations = useTranslations as jest.MockedFunction<typeof useTranslations>

describe('Parcours', () => {
  const mockT = jest.fn()

  beforeEach(() => {
    mockUseTranslations.mockReturnValue(
      Object.assign(mockT, {
        rich: jest.fn((key: string, ..._args: any[]) => mockT(key)),
        markup: jest.fn((key: string, ..._args: any[]) => mockT(key)),
        raw: jest.fn((key: string, ..._args: any[]) => mockT(key)),
        has: jest.fn((_key: string, ..._args: any[]) => true)
      })
    )
    mockT.mockImplementation((key: string) => {
      const translations: Record<string, string> = {
        'exp_careers.title_exp': 'Expérience professionnelle'
      }
      return translations[key] || key
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders title', () => {
    render(<Parcours />)

    expect(screen.getByText('Expérience professionnelle')).toBeInTheDocument()
  })

  it('renders all parcours cards', () => {
    render(<Parcours />)

    expect(screen.getByTestId('card-parcours-2023-01-01')).toBeInTheDocument()
    expect(screen.getByTestId('card-parcours-2024-01-01')).toBeInTheDocument()
    expect(screen.getByTestId('card-parcours-2022-01-01')).toBeInTheDocument()
  })

  it('renders parcours sorted by date in descending order', () => {
    render(<Parcours />)

    const cards = screen.getAllByTestId(/card-parcours-/)

    // Vérifier que les cartes sont dans l'ordre décroissant par date
    expect(cards[0]).toHaveAttribute('data-testid', 'card-parcours-2024-01-01')
    expect(cards[1]).toHaveAttribute('data-testid', 'card-parcours-2023-01-01')
    expect(cards[2]).toHaveAttribute('data-testid', 'card-parcours-2022-01-01')
  })

  it('renders job titles and enterprises', () => {
    render(<Parcours />)

    expect(screen.getByText('Développeur Frontend')).toBeInTheDocument()
    expect(screen.getByText('Développeur Fullstack')).toBeInTheDocument()
    expect(screen.getByText('Stagiaire')).toBeInTheDocument()
    expect(screen.getByText('Entreprise A')).toBeInTheDocument()
    expect(screen.getByText('Entreprise B')).toBeInTheDocument()
    expect(screen.getByText('Entreprise C')).toBeInTheDocument()
  })

  it('calls translation function with correct key', () => {
    render(<Parcours />)

    expect(mockT).toHaveBeenCalledWith('exp_careers.title_exp')
  })
})
