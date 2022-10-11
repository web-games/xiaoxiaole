const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config')

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: "./",
    compress: true,
    port: 9001,
    hot: false,
    liveReload: true,
  }
})