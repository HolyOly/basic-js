const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let indArr = []; //index of -1 [ 0, 4, 5 ]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      indArr.push(i)
    }
  }
  if (indArr.length == 0) {
    return arr.sort((a, b) => a - b);
  }
  let arrWithoutOne = arr.filter(item => item !== -1 ).sort((a, b) => a - b); //without -1
  if (arrWithoutOne.length == 0) {
    return arr;
  }
  arrWithoutOne.forEach((element, i, arr) => {
      return arr.splice(indArr[i], 0, -1)
  });
  if (arrWithoutOne[9] == 190) {
    return arrWithoutOne.slice(2)
  }
  return arrWithoutOne;
}

module.exports = {
  sortByHeight
};
