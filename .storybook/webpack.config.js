const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|pages)/,
        loader: 'awesome-typescript-loader',
        query: {
          configFileName: 'tsconfig.storybook.json'
        }
      }
    ]
  },
  plugins: [new CheckerPlugin()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
}
