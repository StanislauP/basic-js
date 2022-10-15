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
function repeater(str, options ) {
  let a = ""
  let arr = []
  let res =[] 
  let db = {separator:"+", additionSeparator:"|", repeatTimes:1, additionRepeatTimes:1, addition:""}
  for(key in db){if(options[key] === undefined){options[key]=db[key]}}
  a = str;
  for (let j = 0; j < options.additionRepeatTimes; j++){
    arr.push(String(options.addition))}
  a += arr.join(`${options.additionSeparator}`)
  for (let l = 0; l < options.repeatTimes; l++){
    res.push(a)}
  return res.join(`${options.separator}`);
  };

module.exports = {
  repeater
};
