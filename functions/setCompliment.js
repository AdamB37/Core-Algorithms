export default function setCompliment(array1,array2) {
  let compliment = [];
  for(let i = 0; i < array2.length; i++) {
    if( array1.indexOf( array2[i] ) < 0 ) {
      compliment.push( array2[i] )
    }
  }
  return compliment
}
