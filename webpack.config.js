const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const config = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    port: "8088",
    hot: true,
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
    // alias: {
    //   "@": path.join(__dirname, "../base_webpack"),
    // },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [require.resolve("react-refresh/babel")],
            presets: [
              require.resolve("@babel/preset-env"),
              require.resolve("@babel/preset-react"),
            ],
          },
        },
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less?$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
};

module.exports = config;
