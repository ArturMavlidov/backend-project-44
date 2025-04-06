module.exports = {
  extends: ["airbnb-base", "eslint:recommended"],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/extensions": "off",
    "no-console": "off",
    "import/prefer-default-export": "off",
    quotes: ["error", "double", { avoidEscape: true }],
  },
};
