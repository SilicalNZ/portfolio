module.exports = {
  extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'react/no-unescaped-entities': ['error', { forbid: ['>', '"', '}'] }],
    'react/react-in-jsx-scope': 'off',
  },
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: true,
  arrowParens: 'avoid'
};
