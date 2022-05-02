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
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let s1Change = [...new Set(s1.split('').sort())];
  //   let s2Change = [...new Set(s2.split('').sort())];
  //   // return s2Change;
  //   let res = s1Change.filter(function(n) {
  //     return s2Change.indexOf(n) !== -1;
  //   })
  //   return res.length;

  let s1Change = (s1.split('').sort());
    let s2Change = (s2.split('').sort());
    let count = 0;

    var s1Obj = {}; //{ a: 2, b: 1, c: 2 }
    s1Change.forEach(item => {
      s1Obj[item] = (s1Obj[item] || 0) + 1;
    });

    var s2Obj = {}; //{ a: 3, c: 1, d: 1 }
    s2Change.forEach(item => {
      s2Obj[item] = (s2Obj[item] || 0) + 1;
    });
    let obj3 = {};
    for (let key1 in s1Obj) {
        for (let key2 in s2Obj) {
            if (key1 == key2) {
                count += Math.min(s1Obj[key1], s2Obj[key2])
            }
        }
    }

    return count;

}

module.exports = {
  getCommonCharacterCount
};
