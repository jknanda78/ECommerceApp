const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: "eval", // refer: https://webpack.js.org/configuration/devtool/
  entry: {
    app: ["babel-polyfill", "./example/index.js"]
  },
  output: {
    path: __dirname,
    filename: "./example/[name].bundle.js",
  },
  devServer: {
    inline: true,
    contentBase: './example',
    port: 9020
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "sasslint-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ["env", "react", "es2015", "stage-2", "stage-0"],
              plugins: [require('babel-plugin-transform-object-rest-spread')]
            }
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'example/[name].bundle.css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development"),
        "API_LOCATION_HREF": JSON.stringify("http://local.dev.com:9000")
      }
    })
  ]
}
