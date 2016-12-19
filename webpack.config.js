var webpack = require("webpack"),
    path = require("path"),
    node_dir = __dirname + "/node_modules";

module.exports = {
  devtool: "cheap-module-source-map",
  entry: {
    app: "./example/index.js"
  },
  output: {
    path: __dirname,
    filename: "example/[name].bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development")
      }
    })
  ]
}
