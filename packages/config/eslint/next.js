const react = require('./react');

module.exports = {
  ...react,
  extends: [
    ...react.extends,
    "next/core-web-vitals",
  ],
  rules: {
    ...react.rules,
    "@next/next/no-html-link-for-pages": "off",
  },
};
