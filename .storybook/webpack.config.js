const $ = require('core-js/es/object/get-own-property-descriptor')
console.warn($)

module.exports = async ({ config: defaultConfig }) => {
  defaultConfig.module.rules.push({
    test: /\.[j|t]sx?$/,
    exclude: [/\bcore-js\b/, /\bwebpack\/buildin\b/],
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: require('../babel.config')
      }
    ]
  })

  defaultConfig.resolve.extensions.push('.ts', '.tsx', '.jsx')

  defaultConfig.resolve.alias = {
    ...defaultConfig.resolve.alias,
    react: 'preact/compat',
    react$: 'preact/compat',
    'react-dom': 'preact/compat',
    'react-dom$': 'preact/compat'
  }

  return defaultConfig
}
