module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:mdx/recommended'],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  settings: {
    'mdx/code-blocks': false,
    /* optional, if you want to disable language mapper, set it to false */
    /* if you want to override the default language mapper inside, you can provide your own */
    'mdx/language-mapper': false,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    quotes: 'off',
    '@typescript-eslint/quotes': [
      1,
      'single',
      {
        avoidEscape: true,
      },
    ],
    indent: ['error', 2, { SwitchCase: 1 }],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        trailingComma: 'es5',
        semi: false,
        singleQuote: true,
        printWidth: 120,
      },
    ],
  },
}
