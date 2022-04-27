const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let arrStr = n.toString().split('');
    let arrNum = [];
    arrStr.forEach(element => {
        arrNum.push(+element);
    });
    
    let sum = 0;
    for (let i = 0; i < arrNum.length; i++) {
        sum += arrNum[i];
        if (sum >= 10) {
            return getSumOfDigits(sum);
        }
    }
    return sum;
}

module.exports = {
  getSumOfDigits
};
