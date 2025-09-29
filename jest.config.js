import nextJest from 'next/jest.js'

// Fournir le chemin de base de votre application Next.js
const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Fichier de configuration supplémentaire
  moduleNameMapper: {
    // Gérer les styles et les fichiers statiques
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^.+\\.(png|jpg|jpeg|gif|svg|ico|webp|avif|ttf|woff|woff2)$': '<rootDir>/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/$1' // Permet les alias @/ pour simplifier les imports
  },
  testEnvironment: 'jest-environment-jsdom', // Utiliser l'environnement jsdom
  transformIgnorePatterns: ['node_modules/(?!(next-intl|use-intl)/)'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // Inclure tous les fichiers de code source
    '!src/**/*.d.ts', // Exclure les fichiers de définition TypeScript
    '!src/**/*.{spec,test}.{js,jsx,ts,tsx}', // Exclure les fichiers de test
    '!src/**/index.{js,ts}', // Exclure les fichiers d'index si nécessaire
    '!src/**/*.config.{js,ts}', // Exclure les fichiers de configuration
    '!src/**/*.stories.{js,jsx,ts,tsx}' // Exclure Storybook si vous l'utilisez
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text', 'html', 'json-summary'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
}

export default createJestConfig(customJestConfig)
