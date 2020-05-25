const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  context: __dirname + "/src",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: outputPath,
    filename: "bundle.js",
  },
  devServer: {
    contentBase: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
