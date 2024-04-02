module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:storybook/recommended"],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    process: "readonly",
  },
  rules: {
    strict: ["error", "never"],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "always"],
    "no-empty": "off",
    "unused-imports/no-unused-imports": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "space-in-parens": "error",
    "no-multiple-empty-lines": "error",
    "no-irregular-whitespace": "error",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
  },
};
