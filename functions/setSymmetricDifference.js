export default function setSymmetricDifference(array1, array2) {
  let symmetricArray = []
  let newArray = array1.concat(array2)
  for ( let i = 0; i < newArray.length; i++ ) {
    let temp = newArray.slice()
    temp.splice(i,1)
    if( temp.indexOf( newArray[i] ) < 0 ) {
      symmetricArray.push(newArray[i])
    }
  }

  return symmetricArray
}
