const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(k) {
    k = String(k)
    l = []
    for(i of k){
      l.push(k.replace(i, ''))
    }
    console.log(l)
    function compareNumeric(a, b) {
      if (a < b) return 1;
      if (a == b) return 0;
      if (a > b) return -1;
    }
    l.sort(compareNumeric)
    return Number(l[0])
  }

module.exports = {
  deleteDigit
};
