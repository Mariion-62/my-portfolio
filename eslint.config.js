import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import reactPlugin from 'eslint-plugin-react'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
const parser = await import('@typescript-eslint/parser')

export default [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'], // Target the necessary files
    languageOptions: {
      ecmaVersion: 2021, // ES2021
      sourceType: 'module',
      parser: parser.default,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly'
      }
    },
    ignores: ['node_modules/**', '.next/**', 'build/**'], // Exclusion des répertoires
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': typescriptPlugin,
      'unused-imports': unusedImportsPlugin,
      import: importPlugin
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect the React version
      }
    },
    cache: false,
    rules: {
      'require-jsdoc': 'off',
      'new-cap': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ]
    }
  }
]
