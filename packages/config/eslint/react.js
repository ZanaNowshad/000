const base = require('./base');

module.exports = {
  ...base,
  extends: [
    ...base.extends,
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'next/core-web-vitals',
  ],
  env: {
    ...base.env,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ...base.parserOptions,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    ...base.plugins,
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  rules: {
    ...base.rules,
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  globals: {
    React: 'writable'
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
