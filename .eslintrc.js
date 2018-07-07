module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react'
    'standard',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
  },
  plugins: ['react', 'flowtype', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    'prettier/prettier': [
      1,
      {
        singleQuote: true
      }
    ],
    'react/prop-types': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  },
  globals: {
    expect: true,
    jest: true,
    mount: true,
    render: true,
    shallow: true
  }
};
