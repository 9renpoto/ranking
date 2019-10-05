const withTM = require('next-transpile-modules')

module.exports = withTM({
  distDir: '../../dist/functions/next',
  target: 'serverless',
  transpileModules: [
    '@rate/atoms',
    '@rate/molecules',
    '@rate/pages',
    '@rate/templates'
  ]
})
