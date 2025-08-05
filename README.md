# Jest + React Testing Library

This project demonstrates unit testing and integration testing in React using **Jest** and **React Testing Library**, with support for **TypeScript**, **custom hooks**, **MSW (Mock Service Worker)** for mocking API calls, and code formatting/linting using **ESLint** and **Prettier**.

## It also includes Git hooks integration using **Husky** and **lint-staged** for a clean commit workflow.

## 📦 Installation

```bash
# React Testing Library and Jest DOM
npm install --save-dev @testing-library/react @testing-library/jest-dom
# or
yarn add -D @testing-library/react @testing-library/jest-dom

# User events support
npm install --save-dev @testing-library/user-event
# or
yarn add -D @testing-library/user-event

# Jest types for TypeScript support
npm install --save-dev @types/jest
```

## 🧪 Running Tests

### Basic test command

```bash
npm test
# or
npm run test
```

### Watch Mode

Run tests interactively:

```bash
yarn test:watch
# or
npm run test:watch
```

Watch mode will re-run tests related to changed files. You can press:

- w to show more options
- a to run all tests
- p to run by file name pattern

## 🧠 Test Utilities

- test.only — run a specific test
- test.skip — skip a specific test
- describe.only — run only a specific test suite
- describe.skip — skip a test suite
- fit — alias for test.only
- xit — alias for test.skip

## 🧼 Linting & Formatting

```bash
# Install ESLint plugin for Jest
npm install --save-dev eslint-plugin-jest

# Install and configure Prettier
npm install --save-dev --save-exact prettier

# Install Prettier config to avoid conflicts with ESLint
npm install --save-dev eslint-config-prettier
# or
yarn add -D eslint-config-prettier
```

### Run Lint and Format

```bash
npm run lint && npm run format
# or
yarn lint && yarn format
```

## 🎯 Code Coverage

```json
"coverage": "jest --coverage"
```

### Run coverage:

```bash
npm run coverage
npm test --coverage
npm run test -- --coverage --watchAll
```

### Example: Coverage from specific source files

```json
"coverage": "jest --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}'"
```

```json
"collectCoverageFrom": [
  "src/components/**/*.{ts,tsx}",
  "!**/*.{test,spec}.{ts,tsx}",
  "!**/__tests__/**"
]
```

## 🌐 Mocking HTTP Requests

### MSW (Mock Service Worker)

Mock Service Worker is used to intercept and mock network requests in tests and development.

- Official site: https://mswjs.io

```bash
npm install --save-dev msw
```

### Setup Notes:

- Handlers are defined in src/mocks/handlers.ts
- Requests are intercepted using msw/node in test environment

```bash
npm list msw
```

### Additional Fetch Support for Tests

```bash
npm install --save-dev whatwg-fetch
# or
yarn add whatwg-fetch --dev
```

``md

## 🧪 Query Methods in React Testing Library

| Method       | Use Case                                       |
| ------------ | ---------------------------------------------- |
| `getBy...`   | Synchronous. Throws error if element not found |
| `queryBy...` | Synchronous. Returns `null` if not found       |
| `findBy...`  | Asynchronous. Returns a `Promise`              |

## ⌨️ Keyboard Interactions

- Use render with wrapper for custom context providers
- Use renderHook from @testing-library/react-hooks (or vitest equivalent) to test custom hooks

## 🧪 Jest Utilities

- act — to wrap updates that trigger re-renders or effects
- jest.fn() — to mock functions
- jest.spyOn() — to spy on real implementations

## 🐶 Husky (Git Hooks)

```bash
npx husky-init
npm install
```

By default, this sets up a pre-commit hook that runs:

```bash
npm test
```

### Update Pre-commit hook

Instead of just running tests, you can also run lint and format:

```bash
# Replace the contents of .husky/pre-commit
npm run lint && npm run format
# or
yarn lint && yarn format
```

## 🚫 Pre-push Hook Example

Add pre-push hook that runs tests:

```bash
npx husky add .husky/pre-push "npm test -- --watchAll=false"
```

## 🎯 lint-staged

To run linters and formatters only on staged files, install and configure lint-staged:

```bash
npm install --save-dev lint-staged
```

Example package.json config:

```json
"lint-staged": {
  "**/*.{js,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

## 🧪 Testing Playground

- [Testing Playground](https://testing-playground.com/) is a helpful online tool to inspect DOM elements and generate selectors for React Testing Library. You can copy the query code it suggests directly into your tests.
- A great tool to inspect DOM and generate queries for RTL

## ⚙️ Project Setup (React + TypeScript + Vite)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## 📚 Table of Contents

- [Installation](#-installation)
- [Running Tests](#-running-tests)
- [Test Utilities](#-test-utilities)
- [Linting & Formatting](#-linting--formatting)
- [Code Coverage](#-code-coverage)
- [Mocking HTTP Requests](#-mocking-http-requests)
- [Jest Utilities](#-jest-utilities)
- [Husky (Git Hooks)](#-husky-git-hooks)
- [Pre-push Hook](#-pre-push-hook-example)
- [Lint-Staged](#-lint-staged)
- [Testing Playground](#-testing-playground)
- [Project Setup (React + Vite)](#️-project-setup-react--typescript--vite)
