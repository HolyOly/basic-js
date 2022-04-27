const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/*date*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let month = date.getMonth() + 1;
    if ((date.getFullYear()) && (date.getMonth()) && (date.getDate())) {
        if ( month >= 9 &&  month < 12) {
            return "autumn";
        }
        if ( month > 0 && month <= 2 || month == 12) {
            return "winter";
        }
        if ( month >= 3 &&  month < 6) {
            return "spring";
        }
        if ( month >= 6 &&  month < 9) {
            return "summer";
        }
    }
    else if (date === null) {
      return 'Unable to determine the time of year!';
    }
    else {
        throw new SyntaxError('Invalid date!');
      }

}

module.exports = {
  getSeason
};
