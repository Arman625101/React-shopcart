const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
    publicPath: "/",
  },
  devServer: {
    overlay: {
      errors: true,
    },
    port: 3010,
    watchContentBase: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  target: "node",
  plugins: [
    new MiniCssExtractPlugin(),
    new Dotenv({
      path: "./.env.local",
      safe: true,
    }),
  ],
};
