// Mock global pour next-intl
const mockUseTranslations = jest.fn()
const mockUseLocale = jest.fn()

jest.mock('next-intl', () => ({
  useTranslations: mockUseTranslations,
  useLocale: mockUseLocale,
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="intl-provider">{children}</div>
  )
}))

// Configuration par défaut des mocks
beforeEach(() => {
  mockUseLocale.mockReturnValue('fr')
  mockUseTranslations.mockReturnValue((key: string, params?: any) => {
    // Traductions par défaut pour les tests
    const defaultTranslations: Record<string, string> = {
      'navigation.home': 'Accueil',
      'navigation.careers': 'Parcours',
      'navigation.project': 'Projets',
      'footer.legal_notice': 'Mentions légales',
      'footer.copyright': `Copyright © ${params?.currentYear || 2025} Marion Grolleau. Tous droits réservés.`,
      'exp_careers.title_exp': 'Expérience professionnelle',
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
    return defaultTranslations[key] || key
  })
})

afterEach(() => {
  jest.clearAllMocks()
})

// Exporter les mocks pour les tests qui en ont besoin
global.mockUseTranslations = mockUseTranslations
global.mockUseLocale = mockUseLocale
