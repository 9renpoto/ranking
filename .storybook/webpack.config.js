const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [new CheckerPlugin()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
};
