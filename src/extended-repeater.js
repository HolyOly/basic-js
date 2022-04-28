const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/*str, options*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  options.separator = '+'; 
  options.additionSeparator = '|';
  let result = '';
  // if (!str) {
  //     return ;
  // }
  let substr = '';
  let addSepAndAdd = '';
  let substrWithSep = '';
  typeof(str) === 'string' ? str : str = str+``;
  typeof(options.addition) === 'string' ? options.addition : options.addition = options.addition+``;
  typeof(options.separator) === 'string' ? options.separator : options.separator = options.separator+``;
  typeof(options.additionSeparator) === 'string' ? options.additionSeparator : options.separator = options.additionSeparator+``;

  if (options.repeatTimes > 0 && options.additionRepeatTimes > 0) {
      addSepAndAdd = options.addition + options.additionSeparator; //ADDITION|
      addSepAndAdd = addSepAndAdd.repeat(options.additionRepeatTimes -1) + options.addition; // ADDITION|ADDITION|ADDITION
      substr = str + addSepAndAdd; // dufgADDITION|ADDITION|ADDITION
      substrWithSep = str + addSepAndAdd + options.separator;//dufgADDITION|ADDITION|ADDITION+
      result = substrWithSep.repeat(options.repeatTimes - 1) + substr
  }
  if (options.repeatTimes > 0 && (options.additionRepeatTimes == null || options.additionRepeatTimes == undefined)) {
    addSepAndAdd = options.addition + options.additionSeparator; //ADDITION|
    addSepAndAdd = addSepAndAdd  + options.addition; // ADDITION|ADDITION|ADDITION ??
    substr = str + addSepAndAdd; // dufgADDITION|ADDITION|ADDITION
    substrWithSep = str + addSepAndAdd + options.separator;//dufgADDITION|ADDITION|ADDITION+
    result = substrWithSep.repeat(options.repeatTimes - 1) + substr
}
  //options.addition = d;
  
 return result;
}

module.exports = {
  repeater
};
