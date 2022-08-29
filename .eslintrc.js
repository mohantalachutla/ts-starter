module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
    allowImportExportEverywhere: false,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    // 'prettier/@typescript-eslint',
  ],
  rules: {
    // 'no-unused-vars': 'error',  // no need ass it is part of eslint-precommended
  },
}
