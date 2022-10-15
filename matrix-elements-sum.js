const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  for(let i=0; i<matrix.length-1; i++){
    for(let j=0; j<matrix[0].length; j++){
      if(matrix[i][j]===0){
        console.log(matrix[i+1][j])
        matrix[i+1][j]=0}
  }}
  let s=0
  for(i=0; i<matrix.length; i++){for(j=0; j<matrix[0].length; j++){
    console.log(matrix[i][j])
    s+=matrix[i][j]
  }}
  return s
}

module.exports = {
  getMatrixElementsSum
};
