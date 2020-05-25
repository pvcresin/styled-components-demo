const path = require("path");

module.exports = {
  context: __dirname + "/src",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
              plugins: [
                [
                  "babel-plugin-styled-components",
                  {
                    ssr: false,
                    displayName: true,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
};
