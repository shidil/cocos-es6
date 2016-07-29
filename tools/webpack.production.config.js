let path = require('path');

let node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  }
}
