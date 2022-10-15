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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let m = ''
      m = m + k
      m = m.split('')
  let p = []
  let o = []
  let i=0
  while (i<m.length){
      console.log('i', m[i])
      for(let r=0; r<m.length; r++){
          if(m[r]==m[i]){
              continue
          }else{
          p.push(m[r])}
  
      }
      o.push(Number(p.join('')))
      p = []
      console.log(o)
      i += 1
  }
  function compareNumeric(a, b) {
      if (a < b) return 1;
      if (a == b) return 0;
      if (a > b) return -1;
    }
    
    let arr = [ 1, 2, 15 ];
    
    o.sort(compareNumeric);
    return o[0]
}

module.exports = {
  deleteDigit
};
