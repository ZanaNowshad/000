const base = require('./base');

module.exports = {
  ...base,
  extends: [
    ...base.extends,
  ],
  env: {
    ...base.env,
    browser: true,
  },
  rules: {
    ...base.rules,
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
  },
  globals: {
    React: 'writable'
  },
};
