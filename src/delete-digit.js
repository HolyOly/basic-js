const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newArr = [];
    let nArr = n.toString().split('');
    let arr2 = [];
    nArr.forEach((element, i, arr) => arr2.push(Number(arr[i])))

    // for (let i = 0; i < nArr.length; i++) {
    //     newArr.push(nArr.splice(i, 1))
    // }
    if (n > 10) {
      for (let i = 0; i < arr2.length; i++) {
              if (arr2[i] < arr2[i+1]) {
                  arr2.splice(i, 1)
              }
      }
    }
    else  {
      return 1;
    }

    return +arr2.join('');
}

module.exports = {
  deleteDigit
};
