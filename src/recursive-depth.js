const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    //let sum = 1;
    
    // let count = Array.isArray(arr) ? 1 : 0;

    // for (let i = 0; i < arr.length; i++) {
    //   if (Array.isArray(arr[i])) {
    //     count++;
    //     arr = arr.flat();

    //   }
    //   else {
    //     count;
    //   }
    // }
    // return count;

    if (!Array.isArray(arr))
        return 0;

        let count = 0;
        for (let item of arr)
            count = Math.max(count, this.calculateDepth(item));
        return 1 + count;

  }
}

module.exports = {
  DepthCalculator
};
