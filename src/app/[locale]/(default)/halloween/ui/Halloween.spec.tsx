import { render, screen, fireEvent } from '@testing-library/react'
import { useTranslations } from 'next-intl'
import { Halloween } from './Halloween'

// Mock des dépendances
jest.mock('next-intl', () => ({
  useTranslations: jest.fn(),
  useLocale: jest.fn(() => 'fr')
}))

jest.mock('@/src/components/CardHalloween/CardHalloween', () => ({
  CardHalloween: ({
    title,
    answer,
    linkMusic,
    isAswerVisible,
    onAnswerClick
  }: {
    title: string
    answer: string
    linkMusic: string
    isAswerVisible: boolean
    onAnswerClick: () => void
  }) => (
    <div data-testid="card-halloween">
      <h3>{title}</h3>
      <button onClick={onAnswerClick}>Show Answer</button>
      {isAswerVisible && <p data-testid="answer">{answer}</p>}
      <audio data-testid="music" src={linkMusic} />
    </div>
  )
}))

const mockUseTranslations = useTranslations as jest.MockedFunction<typeof useTranslations>

describe('Halloween', () => {
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
        'halloween.title_page': 'Halloween - Devine la musique',
        'halloween.previous_button': 'Précédent',
        'halloween.next_button': 'Suivant',
        'halloween.title_music.title_one': 'Musique 1',
        'halloween.title_music.title_two': 'Musique 2',
        'halloween.title_music.title_three': 'Musique 3',
        'halloween.music.adams_family': 'La Famille Addams',
        'halloween.music.american_horror_story': 'American Horror Story',
        'halloween.music.coraline': 'Coraline'
      }
      return translations[key] || key
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders page title', () => {
    render(<Halloween />)

    expect(screen.getByText('Halloween - Devine la musique')).toBeInTheDocument()
  })

  it('renders CardHalloween component', () => {
    render(<Halloween />)

    expect(screen.getByTestId('card-halloween')).toBeInTheDocument()
  })

  it('renders first music question initially', () => {
    render(<Halloween />)

    expect(screen.getByText('Musique 1')).toBeInTheDocument()
  })

  it('renders navigation buttons', () => {
    render(<Halloween />)

    expect(screen.getByText('Précédent')).toBeInTheDocument()
    expect(screen.getByText('Suivant')).toBeInTheDocument()
  })

  it('disables previous button on first question', () => {
    render(<Halloween />)

    const prevButton = screen.getByText('Précédent')
    expect(prevButton).toBeDisabled()
  })

  it('navigates to next question when next button is clicked', () => {
    render(<Halloween />)

    const nextButton = screen.getByText('Suivant')
    fireEvent.click(nextButton)

    expect(screen.getByText('Musique 2')).toBeInTheDocument()
  })

  it('navigates to previous question when previous button is clicked', () => {
    render(<Halloween />)

    // Aller à la question suivante
    const nextButton = screen.getByText('Suivant')
    fireEvent.click(nextButton)

    // Revenir à la question précédente
    const prevButton = screen.getByText('Précédent')
    fireEvent.click(prevButton)

    expect(screen.getByText('Musique 1')).toBeInTheDocument()
  })

  it('shows answer when answer button is clicked', () => {
    render(<Halloween />)

    const answerButton = screen.getByText('Show Answer')
    fireEvent.click(answerButton)

    expect(screen.getByTestId('answer')).toBeInTheDocument()
    expect(screen.getByText('La Famille Addams')).toBeInTheDocument()
  })

  it('hides answer when navigating to next question', () => {
    render(<Halloween />)

    // Afficher la réponse
    const answerButton = screen.getByText('Show Answer')
    fireEvent.click(answerButton)
    expect(screen.getByTestId('answer')).toBeInTheDocument()

    // Naviguer vers la question suivante
    const nextButton = screen.getByText('Suivant')
    fireEvent.click(nextButton)

    // La réponse ne devrait plus être visible
    expect(screen.queryByTestId('answer')).not.toBeInTheDocument()
  })

  it('disables next button on last question', () => {
    render(<Halloween />)

    const nextButton = screen.getByText('Suivant')

    // Naviguer jusqu'à la dernière question (il y a 20 questions au total)
    for (let i = 0; i < 19; i++) {
      fireEvent.click(nextButton)
    }

    expect(nextButton).toBeDisabled()
  })

  it('renders correct music link', () => {
    render(<Halloween />)

    const audioElement = screen.getByTestId('music')
    expect(audioElement).toHaveAttribute('src', '/assets/adams-family.mp3')
  })

  it('cycles through all questions correctly', () => {
    render(<Halloween />)

    expect(screen.getByText('Musique 1')).toBeInTheDocument()

    // Naviguer vers la deuxième question
    const nextButton = screen.getByText('Suivant')
    fireEvent.click(nextButton)
    expect(screen.getByText('Musique 2')).toBeInTheDocument()

    // Naviguer vers la troisième question
    fireEvent.click(nextButton)
    expect(screen.getByText('Musique 3')).toBeInTheDocument()
  })
})
