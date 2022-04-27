const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/*s1, s2*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let s1Change = [...new Set(s1.split('').sort())];
    let s2Change = [...new Set(s2.split('').sort())];
    // return s2Change;
    let res = s1Change.filter(function(n) {
      return s2Change.indexOf(n) !== -1;
    })
    return res.length;
}

module.exports = {
  getCommonCharacterCount
};
