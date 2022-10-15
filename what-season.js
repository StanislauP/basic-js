const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let b = {0:'winter', 1:'winter', 2:'spring', 3:'spring', 4:'spring',
  5:'summer', 6:'summer', 7:'summer', 8:'autumn/fall',
  9:'autumn/fall', 10:'autumn/fall', 11:'winter',}
  try{
    if(date===undefined){return 'Unable to determine the time of year!'}
    let month = date.getMonth()
  return b[month]}catch{throw new Error('Invalid date!')}
}

module.exports = {
  getSeason
};
