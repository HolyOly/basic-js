const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let MODERN_ACTIVITY = Number(sampleActivity);
    let k = 5730;
    let A0 = 15;
    let HALF_LIFE_PERIOD = 0.693 / k;
    
    // if (MODERN_ACTIVITY < 0) return false;
    // if (sampleActivity === '0') return Infinity;
    // if (sampleActivity === 'Infinity') return Infinity;
    // if (isNaN(MODERN_ACTIVITY) || typeof sampleActivity !== "string") return false;
    let result = Math.ceil(Math.log(A0 / MODERN_ACTIVITY)/(HALF_LIFE_PERIOD));
    if (typeof sampleActivity !== "string") return false;
    if (sampleActivity === 'Infinity') return Infinity;
    if (MODERN_ACTIVITY === 0) return false;
    if (isNaN(result) === true) return false;
    if (result < 0) return false;
    if (result === Infinity) return Infinity;
    return result;
}

module.exports = {
  dateSample
};
