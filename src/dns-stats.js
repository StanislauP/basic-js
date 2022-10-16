const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let a = []
  let b = {}
  let c =''
  for(i of domains){
  a.push(i.split('.'))}
  console.log(a)
  for(i of a){
    for(let j=i.length-1; j>=0; j--){
      c += '.'+i[j]
      b[c]=0
    }
    c=''
  }
  for(i of a){
    for(let j=i.length-1; j>=0; j--){
      c += '.'+i[j]
      b[c]++
    }
    c=''
  }
  console.log(b)
  return b
}

module.exports = {
  getDNSStats
};
