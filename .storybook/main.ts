/**
 * Declarative Storybook configuration as of Storybook 5.3
 * https://medium.com/storybookjs/declarative-storybook-configuration-49912f77b78
 */
module.exports = {
  stories: ['../**/story.tsx'],
  addons: ['@storybook/addon-essentials'],
  // https://github.com/storybookjs/storybook/issues/11146#issuecomment-645341199
  typescript: {
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
      },
    },
  },
  // https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config
  webpackFinal: async (defaultConfig) => {
    defaultConfig.module.rules.push({
      test: /\.[j|t]sx?$/,
      exclude: [/\bcore-js\b/, /\bwebpack\/buildin\b/],
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: require('../babel.config'),
        },
      ],
    })

    defaultConfig.resolve.extensions.push('.ts', '.tsx', '.jsx')

    defaultConfig.resolve.alias = {
      ...defaultConfig.resolve.alias,
      react: 'preact/compat',
      react$: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom$': 'preact/compat',
    }

    return defaultConfig
  },
}
