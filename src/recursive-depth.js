const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
var l = 1
class DepthCalculator {
    calculateDepth(a){
      for(let i=0; i<a.length; i++){
          if(typeof(a[i]) === 'object'){
            l +=1
            calculateDepth(a[i])} }       
      return l}
}

module.exports = {
  DepthCalculator
};
