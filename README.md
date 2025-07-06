# My Portfolio 🚀

Bienvenue sur le dépôt de mon portfolio personnel. Ce projet présente mes compétences, mes projets et mon expérience professionnelle en tant que développeur.

## Table des matières 📓


- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Outils et bonnes pratiques](#outils-et-bonnes-pratiques)
- [Commandes globales](#commandes-globales)

## Aperçu 🌐

Ce portfolio est une application web développée avec Next.js qui met en avant mes projets récents, mon parcours professionnel et mes compétences techniques.

## Fonctionnalités ✨

- 📝 Présentation de mes projets avec des descriptions détaillées et des liens vers les dépôts correspondants.
- 👨‍💻 Section sur mon expérience professionnelle et mes compétences.

## Technologies utilisées 🛠️

- [Next.js](https://nextjs.org/) - Framework React pour le rendu côté serveur et la génération de sites statiques.
- [React](https://reactjs.org/) - Bibliothèque JavaScript pour construire des interfaces utilisateur.
- [TypeScript](https://www.typescriptlang.org/) - Sur-ensemble typé de JavaScript.

## Installation ⚙️

Pour exécuter ce projet en local, assurez-vous d'avoir Node.js installé, puis clonez ce dépôt et installez les dépendances :

    git clone https://github.com/Mariion-62/my-portfolio.git
    cd my-portfolio
    pnpm install

## Utilisation ▶️

Lancer l'application en mode développement :

    pnpm run dev

Ouvrez votre navigateur et accédez à http://localhost:3000 pour voir le résultat.

## Outils et bonnes pratiques 🛡️

### ESLint 🔍

ESLint est utilisé pour analyser statiquement le code et garantir un style cohérent tout en évitant les erreurs.

Commandes disponibles :

Vérifier les erreurs ESLint :

    pnpm run lint

Le fichier de configuration ESLint se trouve dans .eslintrc.json. Vous pouvez personnaliser les règles si nécessaire.

### Prettier ✨

Prettier est utilisé pour formater automatiquement le code afin de respecter un style uniforme.

Formater le code :

    pnpm run format

Prettier fonctionne en complément d'ESLint grâce au plugin eslint-plugin-prettier. Les règles de configuration sont définies dans .prettierrc.

### Commitlint 📜

Commitlint garantit que vos messages de commit respectent une convention spécifique (par exemple, Conventional Commits).

Règles suivies :Les messages de commit doivent respecter le format suivant :

type(scope): description

Exemples :

feat(ui): ajout d'un nouveau composant
fix(auth): correction d'un bug d'authentification

Configuration et utilisation :

Les règles sont définies dans le fichier commitlint.config.js.

Les hooks Git sont configurés avec Husky pour vérifier les messages de commit avant qu'ils ne soient ajoutés :

    npx husky install

### Jest 🧪

Jest est utilisé pour les tests unitaires et d'intégration dans le projet.

Commandes disponibles :

Lancer les tests :

    pnpm run test

Lancer les tests avec couverture :

    pnpm run test:cov

Les fichiers de test ont l'extension .spec.tsx.

### SonarQube 🛠️

SonarQube est utilisé pour l'analyse statique du code, la détection des bugs, et la vérification de la qualité du code.

Analyser le code :

    sonar-scanner

## Commandes globales 🌟

Voici un résumé des principales commandes disponibles :

| Commande               | Description                                   |
|------------------------|-----------------------------------------------|
| `npm run lint`         | 🔍 Vérifie les erreurs ESLint                   |
| `npm run lint:fix`     | 🔧 Corrige les erreurs ESLint                   |
| `npm run format`       | ✨ Formate le code avec Prettier                |
| `npm run test`         | 🧪 Exécute les tests avec Jest                  |
| `npm run test:coverage`| 📊 Exécute les tests et génère un rapport de couverture |
| `sonar-scanner`        | 🛠️ Analyse le code avec SonarQube               |

