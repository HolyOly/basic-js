const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr) || Array.isArray(arr) == false || arr.constructor.name != "Array") {
    throw new SyntaxError("'arr' parameter must be an instance of the Array!")
  }
  let newArr = arr.slice();
  let removed;

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[0] === '--discard-prev' || newArr[0] === '--double-prev') {
      removed = newArr.splice(0, 1);
    }
    if (newArr[newArr.length - 1] === '--discard-next' || newArr[newArr.length - 1] === '--double-next') {
      removed = newArr.splice(newArr.length-1, 1);
    }
    
    if (newArr[i] === '--discard-next') {
      removed = newArr.splice(i, 2);
      if (newArr[i] === '--double-prev') { //
        removed = newArr.splice(i, 1); //
      } 
      if (newArr[i] === '--discard-prev') { //
          removed = newArr.splice(i, 1); //
      } 
    }
    if (newArr[i] === '--discard-prev') {
      removed = newArr.splice(i-1, 2);
    }
    if (newArr[i] === '--double-prev') {
      removed = newArr.splice(i, 1, newArr[i-1]);
    }
    if (newArr[i] === '--double-next') {
      removed = newArr.splice(i, 1, newArr[i+1]);
    }
  }
  return newArr;

}

module.exports = {
  transform
};
