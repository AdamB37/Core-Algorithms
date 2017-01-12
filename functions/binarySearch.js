export default function binarySearch(sortedArray, number) {

  let L = 0;
  let R = sortedArray.length - 1;
  let T = number;

  while ( L <= R ) {
    let M = Math.floor( (L + R) / 2)
    if ( sortedArray[M] < T ) {
      L = M + 1
    }
    if ( sortedArray[M] > T ) {
      R = M - 1
    }
    if ( sortedArray[M] === T) {
      return M;
    }
  }
}
