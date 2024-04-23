module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],
  env: {
    es2021: true,
    node: true,
  },
  rules: {},
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
};
