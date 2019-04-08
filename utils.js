var path = require('path')
var glob = require('glob')


// ./src/lib/**/*.js

const getEntries = function(globPath) {
  let entries = {}
  glob.sync(globPath).forEach(entry => {
    let tmp = entry.split('/').splice(-2, 1)
    let moduleName = tmp[0]
    entries[moduleName] = entry
  })
  return entries
}

module.exports = {
  getEntries
}

// getEntries('./src/lib/**/*.js')


// entry: {
//   print1: './src/lib/print1/index.js',
//   print2: './src/lib/print2/index.js'
// },