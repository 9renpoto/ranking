const withTM = require('next-transpile-modules')
const withPreact = require('next-preactx-plugin')

module.exports = withPreact(
  withTM({
    distDir: '../../dist/functions/next',
    target: 'experimental-serverless-trace',
    transpileModules: [
      '@rate/atoms',
      '@rate/molecules',
      '@rate/pages',
      '@rate/templates'
    ],
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.po/,
        use: [
          {
            loader: '@lingui/loader'
          }
        ]
      })
      return config
    }
  })
)
