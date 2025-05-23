/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/packages', '<rootDir>/apps'],
  testMatch: [
    '**/__tests__/**/*.{js,jsx,ts,tsx}',
    '**/*.(test|spec).{js,jsx,ts,tsx}'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/*.config.{js,ts}',
  ],
  moduleNameMapper: {
    '^@zaibuld/(.*)$': '<rootDir>/packages/$1/src',
  },
  projects: [
    {
      displayName: 'packages',
      testMatch: ['<rootDir>/packages/**/*.(test|spec).{js,jsx,ts,tsx}'],
      transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
      },
    },
    {
      displayName: 'apps',
      testMatch: ['<rootDir>/apps/**/*.(test|spec).{js,jsx,ts,tsx}'],
      transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
      },
    },
  ],
};
