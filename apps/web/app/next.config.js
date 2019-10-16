const withTM = require('next-transpile-modules')
const withPreact = require('next-preactx-plugin')

module.exports = withPreact(
  withTM({
    distDir: '../../dist/functions/next',
    target: 'serverless',
    transpileModules: [
      '@rate/atoms',
      '@rate/molecules',
      '@rate/pages',
      '@rate/templates'
    ]
  })
)
