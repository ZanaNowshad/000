const base = require('./base');

module.exports = {
  ...base,
  extends: [
    ...base.extends,
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: [...base.plugins, "react", "react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    ...base.rules,
    "react/react-in-jsx-scope": "off",
    "react/jsx-sort-props": "warn",
    "react/jsx-key": "warn",
  },
};
