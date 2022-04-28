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
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (options.separator == undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = '|';
  }
  if (typeof str == Object) { //options.addition == objWithSpecificCoercion || 
    //str = 'STRING_OR_DEFAULT';
    function fun() {
    }
    
    fun[Symbol.toPrimitive] = function (hint) {
        switch(hint) {
            case "string": return "all right";
            case "number": return 100;
            default: return "something else";
        }
    };
  }
  if (typeof options.addition == Object) { //options.addition == objWithSpecificCoercion || 
    //options.addition = 'STRING_OR_DEFAULT';

    function fun() {
    }
    
    fun[Symbol.toPrimitive] = function (hint) {
        switch(hint) {
            case "string": return "all right";
            case "number": return 100;
            default: return "something else";
        }
    };
  }
  let result = '';
  let substr = '';
  let addSepAndAdd = '';
  let substrWithSep = '';
  typeof(str) === 'string' ? str : str = str+``;
  typeof(options.addition) === 'string' ? options.addition : options.addition+``;
  typeof(options.separator) === 'string' ? options.separator : options.separator+``;
  typeof(options.additionSeparator) === 'string' ? options.additionSeparator : options.additionSeparator+``;

  if (options.repeatTimes > 0 && options.additionRepeatTimes > 0) {
      addSepAndAdd = options.addition + options.additionSeparator; //ADDITION|
      addSepAndAdd = addSepAndAdd.repeat(options.additionRepeatTimes -1) + options.addition; // ADDITION|ADDITION|ADDITION
      substr = str + addSepAndAdd; // dufgADDITION|ADDITION|ADDITION
      substrWithSep = str + addSepAndAdd + options.separator;//dufgADDITION|ADDITION|ADDITION+
      result = substrWithSep.repeat(options.repeatTimes - 1) + substr
  }
  if (options.repeatTimes > 0 && options.additionRepeatTimes == undefined) {
    addSepAndAdd = options.addition + options.additionSeparator; //ADDITION|
    addSepAndAdd = addSepAndAdd  + options.addition; // ADDITION|ADDITION|ADDITION ??
    substr = str + addSepAndAdd; // dufgADDITION|ADDITION|ADDITION
    substrWithSep = str + addSepAndAdd + options.separator;//dufgADDITION|ADDITION|ADDITION+
    result = substrWithSep.repeat(options.repeatTimes - 1) + substr
  }
  if (options.repeatTimes > 0 && options.additionRepeatTimes == undefined && options.addition == undefined) {
      substr = str; // la
      substrWithSep = str + options.separator;//la+
      result = substrWithSep.repeat(options.repeatTimes - 1) + substr //la+la
  }
  if (options.repeatTimes > 0 && options.additionRepeatTimes == undefined && options.addition) {
    substr = str + options.addition; // STRING_OR_DEFAULTSTRING_OR_DEFAULT
    substrWithSep = substr + options.separator;//STRING_OR_DEFAULTSTRING_OR_DEFAULT+
    result = substrWithSep.repeat(options.repeatTimes - 1) + substr //STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT
}
  
  if (options.repeatTimes == undefined && options.additionRepeatTimes == undefined) {
      substr = str; // 'TESTstr'
      result = substr + options.addition //la+la
  }
  return result;
}

module.exports = {
  repeater
};
