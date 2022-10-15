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
 function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let a = []
  let b = 0
  for(i of str){
    for(j of str){
      if(i===j){
        b += 1
      }
    }
    a[i]=b
    b=0
  }
  let l = ''
  for(i in a){
    console.log(i)
    if(a[i] == 1){l += i
    }else{
    l += a[i]+i}
  }
  console.log(l)

  return l
}

module.exports = {
  encodeLine
};
