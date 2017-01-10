export default function setUnion(array1, array2) {
  let newArray = array1.concat(array2);
  for ( var i = 0; i < newArray.length -1 ; i++) {
    for ( var j = i + 1; j < newArray.length; j++ ) {
      if ( newArray[i] == newArray[j] ) {
          newArray.splice( j, 1 );
          // j--
      }
    }
  }
  return newArray;
}

// setUnion([1, 2, 3, 4], [2, 4, 6, 8]);

// [1, 2, 3, 4, 2, 4, 6, 8]
