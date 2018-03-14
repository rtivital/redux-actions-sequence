const path = require('path');

module.exports = {
  entry: ['./src/reduxActionsSequence'],
  mode: 'production',
  output: {
    path: path.join(__dirname, './lib'),
    filename: 'index.js',
    publicPath: '/',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: 'reduxActionsSequence',
    globalObject: 'this',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};
