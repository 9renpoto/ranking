module.exports = async ({ config: defaultConfig }) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    loader: require('ts-loader')
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
