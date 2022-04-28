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
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
      throw new Error('Invalid date!');
  }

  try {
    isNaN(date)
  } catch {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth() + 1;
    // if ((date.getMonth())) { //(date.getFullYear()) &&   (date.getDate())
      //if (date != null) {
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
    // }
   

}

module.exports = {
  getSeason
};
