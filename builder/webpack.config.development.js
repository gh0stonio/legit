import baseConfig from './webpack.config.base';

const config = {
  ...baseConfig,
  entry: './app/index',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  debug: true,
  devtool: 'cheap-module-source-map'
};

export default config;
