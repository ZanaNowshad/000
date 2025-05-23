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
  },
};
