const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let a = 0
  let b = {}
  let c = {}
  for(let i of s1){
    for(let j of s1){
      if(i==j){
        a += 1
      }
    }
  b[i]=a
  a = 0
}
  for(let i of s2){
    for(let j of s2){
      if(i==j){
        a += 1
    }
  }
c[i]=a
a = 0
}
for(let key in b) {
  console.log(key, b[key], c[key]);
  if (b[key]===c[key]){a+=b[key]}
  if (b[key]>c[key] && c[key]!=0){a+=c[key]}
  if (b[key]<c[key]){a+=b[key]}
}
return a
}

module.exports = {
  getCommonCharacterCount
};
