/** @type { import('@storybook/preact-webpack5').StorybookConfig } */
import path from 'path';

const config = {
  stories: ['../ui/**/*.stories.mdx', '../ui/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-toolbars',
  ],
  framework: {
    name: '@storybook/preact-webpack5',
    options: {},
  },
  // add aliases
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '.storybook': path.resolve(__dirname, '../.storybook'),
    };
    return config;
  },
};

export default config;
