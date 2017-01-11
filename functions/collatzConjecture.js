'use strict'

export default function collatzConjecture(number){
  let result = [];

  function collatzRecursive(number){
    if(Number.isInteger(number) && number !== 0){
      result.push(number);
      if(number===1){
        return result;
      }
      if((number%2)===0){
        return collatzRecursive(number / 2);
      }
      else{
        return collatzRecursive(number * 3 + 1);
      }
    }
    else return undefined;
  }

  return collatzRecursive(number);

}
