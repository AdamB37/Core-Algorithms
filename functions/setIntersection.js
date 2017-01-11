export default function setIntersection (array1, array2) {
  let sectionArray = [];
  let newArray = array1.concat(array2);
  for ( let i = 0; i < newArray.length - 1; i++ ) {
    for ( let j = i + 1; j < newArray.length; j++ ) {
      if ( newArray[i] == newArray[j]) {
        sectionArray.push(newArray[i])
      }
    }
  }
  return sectionArray; 
}
