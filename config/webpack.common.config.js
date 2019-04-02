const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './js/index.js',
  plugins: [
    new HtmlPlugin({
      template: "./html/index.html"
    })
  ],
  mode: 'none'
};
