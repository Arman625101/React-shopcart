/* eslint-disable no-undef */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["regenerator-runtime/runtime.js", "./src/index.js"],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    overlay: {
      errors: true,
    },
    port: 3010,
    hot: true,
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
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  target: "web",
  plugins: [
    new MiniCssExtractPlugin(),
    new Dotenv({
      path: "./.env.local",
      safe: false,
    }),
  ],
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
};
