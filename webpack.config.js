var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js'
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'api': path.resolve(__dirname, './src/api'),
      'actions': path.resolve(__dirname, './src/vuex/actions')
    }
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'eslint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue',
      exclude: /node_modules/
    }]
  }
};
