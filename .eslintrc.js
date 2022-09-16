module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    "react-native/react-native": true,
  },
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'max-len': [
          'error',
          {
            code: 240,
          },
        ],
        'no-console': 'off',
        semi: ['error', 'always'],
        quotes: [
          'error',
          'single',
          {
            avoidEscape: true,
            allowTemplateLiterals: true,
          },
        ],
        radix: 'off',
        'import/extensions': 'off',
        'no-param-reassign': 'off',
        'global-require': 'off',
        'class-methods-use-this': 'off',
        'consistent-return': 'off',
        'no-restriced-syntax': 'off',
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': [
          'error',
          'always',
          {
            exceptAfterSingleLine: true,
          },
        ],
        '@typescript-eslint/no-floating-promises': [
          'off',
          {
            ignoreVoid: true,
            ignoreIIFE: true,
          },
        ],
        '@typescript-eslint/no-namespace': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/destructuring-assignment': 'off',
        'react/no-unstable-nested-components': [
          'warn',
          {
            allowAsProps: true,
          },
        ],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'never'],
        'import/prefer-default-export': 'off',
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 'warn',
        'react-native/no-color-literals': 2,
        'react-native/no-raw-text': 'off',
        'react-native/sort-styles': [
          'error',
          'asc',
          {
            ignoreClassNames: false,
            ignoreStyleProperties: false,
          },
        ],
      },
    },
  ],
};
