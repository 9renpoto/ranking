const withTM = require('next-transpile-modules')(['@ranking/components'])
const withPreact = require('next-preactx-plugin')

module.exports = withPreact(
  withTM({
    distDir: '../../dist/functions/next',
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.po/,
        use: [
          {
            loader: '@lingui/loader'
          }
        ]
      })

      if (!isServer) {
        config.node = {
          fs: 'empty',
          module: 'empty'
        }
      }

      return config
    }
  })
)
