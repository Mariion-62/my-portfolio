import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
const parser = await import('@typescript-eslint/parser')

export default [
  {
    ignores: ['node_modules/**', '.next/**', 'build/**', 'coverage/**', 'out/**'] // Exclusion des répertoires
  },
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
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': typescriptPlugin,
      'unused-imports': unusedImportsPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect the React version
      }
    },
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
      ],
      // Règles d'accessibilité
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/html-has-lang': 'error',
      'jsx-a11y/img-redundant-alt': 'error',
      'jsx-a11y/interactive-supports-focus': 'warn',
      'jsx-a11y/label-has-associated-control': 'error',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/no-redundant-roles': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
      'jsx-a11y/tabindex-no-positive': 'error'
    }
  }
]
