const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(sampleActivity==='0'){return false}
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(typeof sampleActivity!='string' || sampleActivity[0]=='-'){return false}
  let h= Math.log(15/sampleActivity)/(0.0001209424)
  if(h<0 || h==Infinity){return false}
  if(h===NaN){return false}
  return Math.ceil(h)
}

module.exports = {
  dateSample
};
