export const locales = ['en', 'fr'] as const // tes langues ici
export const defaultLocale = 'fr'

// Ces valeurs sont utilisées par le middleware pour l'internationalisation
export type Locale = typeof locales[number]
