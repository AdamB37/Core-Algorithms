'use strict'
let result = [];
export default function collatzConjecture(number){
  if(Number.isInteger(number) && number !== 0){
    result.push(number);
    if(number===1){
      return result;
    }
    if((number%2)===0){
      return collatzConjecture(number / 2);
    }
    else{
      return collatzConjecture(number * 3 + 1);
    }
  }
  else return undefined;

}
