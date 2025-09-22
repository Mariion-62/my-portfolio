# Documentation du Projet - My Portfolio

## 📋 Vue d'ensemble

Ce projet est un portfolio personnel développé avec Next.js, présentant les compétences, projets et expérience professionnelle du développeur. L'application utilise des technologies modernes et suit les meilleures pratiques de développement.

## 🛠️ Stack Technique

### Framework Principal
- **Next.js 15.0.0** - Framework React avec rendu côté serveur et génération de sites statiques
- **React 18** - Bibliothèque JavaScript pour les interfaces utilisateur
- **TypeScript** - Sur-ensemble typé de JavaScript

### Styling & UI
- **Styled Components** - CSS-in-JS pour la stylisation des composants
- **SASS** - Préprocesseur CSS pour les styles avancés
- **React Icons** - Bibliothèque d'icônes

### Internationalisation
- **next-intl** - Solution d'internationalisation pour Next.js

## 📁 Structure du Projet

```
my-portfolio/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── [locale]/          # Routing internationalisé
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Page de redirection
│   │   └── not-found.tsx      # Page 404
│   ├── components/            # Composants réutilisables
│   │   ├── CardHalloween/     # Composant carte Halloween
│   │   ├── CardHomepage/      # Composant carte homepage
│   │   ├── CardParcours/      # Composant carte parcours
│   │   ├── CardRealisation/   # Composant carte réalisation
│   │   ├── Description/       # Composant description
│   │   ├── Footer/            # Composant footer
│   │   ├── Header/            # Composant header
│   │   ├── MenuBurger/        # Composant menu burger
│   │   └── Navigation/        # Composant navigation
│   └── utils/                 # Fonctions utilitaires
├── public/                    # Assets statiques
├── messages/                  # Fichiers de traduction
├── types/                     # Définitions de types TypeScript
├── __mocks__/                 # Mocks pour les tests
└── coverage/                  # Rapports de couverture de tests
```

## 🌐 Fonctionnalités

### Pages Principales
- **Page d'accueil** - Présentation générale
- **Mon Parcours** - Expérience professionnelle et formation
- **Réalisations** - Projets développés
- **Page Halloween** - Page thématique saisonnière

### Fonctionnalités Techniques
- ✅ **Internationalisation** - Support multilingue avec next-intl
- ✅ **Responsive Design** - Adaptation mobile et desktop
- ✅ **Navigation dynamique** - Menu burger pour mobile
- ✅ **Pages thématiques** - Contenu saisonnier (Halloween, Noël)
- ✅ **Routing avancé** - App Router avec paramètres de locale

## 🧪 Tests & Qualité

### Framework de Tests
- **Jest** - Framework de tests unitaires
- **@testing-library/react** - Utilitaires de test pour React
- **@testing-library/jest-dom** - Matchers Jest pour DOM

### Outils de Qualité Code
- **ESLint** - Linter JavaScript/TypeScript
- **Prettier** - Formateur de code
- **TypeScript** - Vérification de types statique
- **SonarQube** - Analyse statique de code

### Git Hooks & CI/CD
- **Husky** - Git hooks pour automatisation
- **lint-staged** - Linting sur fichiers stagés
- **Commitlint** - Validation des messages de commit

## 📦 Scripts Disponibles

| Script | Description |
|--------|-------------|
| `pnpm dev` | 🚀 Démarre le serveur de développement |
| `pnpm build` | 🏗️ Build de production |
| `pnpm start` | ▶️ Démarre le serveur de production |
| `pnpm lint` | 🔍 Vérifie les erreurs ESLint |
| `pnpm format` | ✨ Formate le code avec Prettier |
| `pnpm test` | 🧪 Lance les tests en mode watch |
| `pnpm test:cov` | 📊 Lance les tests avec couverture |

## ⚙️ Configuration

### Variables d'Environnement
Le projet utilise un fichier `.env` pour la configuration locale.

### Internationalisation
- Configuration dans `i18n.config.js` et `next-intl.config.mjs`
- Fichiers de traduction dans le dossier `messages/`
- Support français par défaut

### TypeScript
- Configuration dans `tsconfig.json`
- Alias de chemin : `@/*` pointe vers la racine
- Target ES2017 pour compatibilité moderne

## 🎨 Assets

### Images
Le dossier `public/` contient :
- Logos d'entreprises (WCS, SYB, CDSA59, etc.)
- Captures d'écran de projets
- Icônes thématiques (Halloween, Noël)
- Images d'erreur (404)

### Ressources
- Favicon personnalisé
- Assets saisonniers pour thèmes spéciaux

## 🔧 Développement

### Installation
```bash
git clone https://github.com/Mariion-62/my-portfolio.git
cd my-portfolio
pnpm install
```

### Développement Local
```bash
pnpm dev
# Application disponible sur http://localhost:3000
```

### Build Production
```bash
pnpm build
pnpm start
```

## 📈 Qualité & Performance

### Métriques de Qualité
- Tests unitaires avec couverture
- Analyse SonarQube intégrée
- Linting automatique sur commit
- Formatage de code standardisé

### Performance
- Build optimisé avec Next.js
- Images optimisées
- CSS compressé avec SASS
- Bundle moderne avec ES2017+

## 🚀 Déploiement

Le projet est configuré pour un déploiement facile avec :
- Build statique Next.js
- Configuration Vercel-ready
- Variables d'environnement supportées
- Assets optimisés automatiquement

---

*Documentation générée automatiquement - Dernière mise à jour : Septembre 2025*