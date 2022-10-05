const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')

module.exports = merge(baseWebpackConfig,{
  mode: 'production',
  devtool:'#source-map',
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, './dist'),{
      root: path.resolve(__dirname, './'),
      verbose: true
    })
  ]
})