const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    return (str.match(/(.)\1*/g) || []).reduce((sum, i) => {
        return sum.push([i.length, i[0]]), sum;
    }, []).flat().join('').replace(/[1]/g, '');
}

module.exports = {
  encodeLine
};
