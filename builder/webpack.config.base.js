import path from 'path';

export default {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: [
    'git-wrapper2-promise'
  ]
};
