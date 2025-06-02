module.exports = {
  root: true,
  extends: ["./packages/config/eslint/react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};