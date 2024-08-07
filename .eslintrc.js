module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json'],
    sourceType: 'module',
  },
  ignorePatterns: [
    'node_modules',
    '*.stories.tsx',
    '**/dist/**',
    '*.js', // Ignore built files.
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/no-unknown-property': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'jest/no-deprecated-functions': 'off',
    '@typescript-eslint/ban-types': ['error', {types: {'{}': false}}],
    'no-else-return': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  globals: {
    ga: true,
  },
};
