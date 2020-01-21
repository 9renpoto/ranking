module.exports = async ({ config: defaultConfig }) => {
  defaultConfig.module.rules.push({
    test: /\.[j|t]sx?$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-optional-chaining',
            'macros',
            'lodash'
          ],
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript'
          ]
        }
      }
    ]
  })

  defaultConfig.resolve.alias = Object.assign({}, defaultConfig.resolve.alias, {
    react: 'preact/compat',
    react$: 'preact/compat',
    'react-dom': 'preact/compat',
    'react-dom$': 'preact/compat'
  })

  defaultConfig.resolve.extensions.push('.ts', '.tsx', '.jsx')

  return defaultConfig
}
