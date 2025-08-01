// jest.config.js
export default {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts", // exclude type declarations
    "!src/**/main.tsx", // optional: include or exclude based on your needs
    "!**/*.{types,test,spec}.{ts,tsx}", // Exclude test files
    "!**/__tests__/**"           // Exclude __tests__ folder
  ],
  coverageReporters: ["text", "lcov"],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    // Mock static assets like SVGs
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js',

    // Mock styles
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
};
