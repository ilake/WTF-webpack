const path         = require('path');
const Merge        = require('webpack-merge');
const CommonConfig = require('./webpack.common.config.js');

module.exports = Merge(CommonConfig, {
  output: {
    path: path.join(__dirname, '../production'),
    filename: 'bundle-[contenthash].js'
  },
  optimization: {
    minimize: true
  }
});
