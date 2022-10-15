const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr){

    if(typeof arr!='object' || arr['foo']==='bar'){throw new Error("\'arr\' parameter must be an instance of the Array!")}
    let l = []
    console.log(arr) 
    for(let i=0; i<arr.length; i++){
        if(arr[i]==='--discard-next'){
            continue}
        if(arr[i-1]==='--discard-next'){
            continue}
        if(arr[i]==='--discard-prev'){if(l.length>0){
            l.pop()}
        continue}
        if(arr[i]==='--double-next'){if(arr.indexOf(arr[i])==arr.length-1){break}else{
            l.push(arr[i+1]*2)
            continue}}
        if(arr[i-1]==='--double-next'){if(arr.indexOf(arr[i])==arr.length-1){break}else{
            continue}}
        if(arr[i]==='--double-prev'){if(l.length>0){
          l[l.length-1]=l[l.length-1]*2
          continue}else{continue}
            }
        l.push(arr[i])}
    return l
    }

module.exports = {
  transform
};
