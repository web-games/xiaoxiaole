const path = require('path')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config')

let webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./resources"),
          to: "resources"
        },
      ],
    })
  ],
  output: {
    publicPath: './'
  }
});

// console.log(webpackConfig)

module.exports = webpackConfig