const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  plugins: [new CheckerPlugin()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
}
