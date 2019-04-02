const path = require('path');
/* start new code */
const glob = require('glob');

const testFiles = glob.sync("**/*.test.js").filter(function(element) {
  return element != "test/bundle.test.js";
}).map(function(element) {
  return "./" + element;
});
/* end new code */

module.exports = {
/* start new code */
  entry: testFiles,
/* end new code */
  output: {
    path: path.resolve(__dirname, "."),
    filename: "bundle.test.js"
  },
  mode: "none"
};
