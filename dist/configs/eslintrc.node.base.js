module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json'],
    sourceType: 'module',
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
    '/shared/**/*',
    '.eslintrc.js',
    'jest.config.js',
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'new-cap': 'off',
    quotes: [2, 'single', {avoidEscape: true}],
    'import/no-unresolved': 0,
    'require-jsdoc': 'off',
    indent: 'off',
    'operator-linebreak': 'off',
  },
  overrides: [
    {
      files: ['webpack.config.js'],
      parserOptions: {
        project: null,
      },
    },
  ],
};
