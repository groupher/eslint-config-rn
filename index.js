// see details:
// https://github.com/groupher/eslint-config-rn/blob/master/index.js
module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-native', 'eslint-plugin-react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        // just tmp, rm .js when whole project use ts
        extensions: ['.ts', '.tsx', '.js'],
      },
    },
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'max-len': ['error', 120],
    quotes: [2, 'single', { avoidEscape: true }],
    'no-use-before-define': ['error', { variables: false }],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 0,
    'import/no-extraneous-dependencies': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    // prettier options
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        bracketSpacing: true,
        trailingComma: 'es5',
      },
    ],
  },
}
