const path         = require('path');
const Merge        = require('webpack-merge');
const CommonConfig = require('./webpack.common.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = Merge(CommonConfig, {
  output: {
    path: path.join(__dirname, '../production'),
    filename: 'bundle-[contenthash].js'
  },
  devtool: "inline-source-map",
  plugins: [
    new MiniCssExtractPlugin({ filename: "styles-[contenthash].css" })
  ],
  optimization: {
    minimize: true
  }
});
