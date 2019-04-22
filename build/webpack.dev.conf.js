'use strict'
const path = require('path')
const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    open: false
  }
})

console.log('devWebpackConfig::', devWebpackConfig);



module.exports = devWebpackConfig
  

