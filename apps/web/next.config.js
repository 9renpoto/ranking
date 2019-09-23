const withTM = require('next-transpile-modules')

module.exports = withTM({
  target: 'serverless',
  transpileModules: [
    '@rate/atoms',
    '@rate/molecules',
    '@rate/pages',
    '@rate/templates'
  ]
})
