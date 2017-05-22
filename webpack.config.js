// webpack.config.js
const webpack = require('webpack')
const path = require('path')

const config = {
  context: path.resolve(__dirname, 'js'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'js'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env']
              ]
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
