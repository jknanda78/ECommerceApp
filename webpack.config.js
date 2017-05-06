var webpack = require("webpack"),
    path = require("path"),
    node_dir = __dirname + "/node_modules";

module.exports = {
  devtool: "cheap-module-source-map",
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
    loaders: [
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: "json-loader"
      },
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2", "stage-0"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development"),
        "API_LOCATION_HREF": JSON.stringify("http://local.dev.com:9000")
      }
    })
  ]
}
