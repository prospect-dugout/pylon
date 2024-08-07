module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['preact', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json'],
    sourceType: 'module',
  },
  ignorePatterns: [
    'supabase',
    '**/dist/**',
    '*.js', // Ignore built files.
  ],
  plugins: ['@typescript-eslint'],
  rules: {
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
