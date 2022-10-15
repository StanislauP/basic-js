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

class DepthCalculator {
   calculateDepth(a, ar = []){
    ar.push(a)
    for(i of a){
        if(typeof(i) === 'object'){ 
          calculateDepth(i, ar)} }       
    return ar.length}
}

module.exports = {
  DepthCalculator
};
