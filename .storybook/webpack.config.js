module.exports = async ({ config: defaultConfig }) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    loader: require.resolve('babel-loader'),
    options: {
      plugins: ['macros'],
      presets: [
        [
          'next/babel',
          {
            'preset-env': {
              modules: 'commonjs'
            }
          }
        ]
      ]
    }
  })

  defaultConfig.resolve.extensions.push('.ts', '.tsx', '.jsx')

  return defaultConfig
}
