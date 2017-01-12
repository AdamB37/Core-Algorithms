export default function mergeSort(unsortedArray) {
  if(unsortedArray.length==1) return unsortedArray
  let iBegin = 0
  let iEnd = unsortedArray.length-1
  let iMiddle = Math.floor((iBegin+iEnd)/2)+1

  let splitArray1 = unsortedArray.slice(iBegin, iMiddle)
  let splitArray2 = unsortedArray.slice(iMiddle)

  splitArray1 = mergeSort(splitArray1)
  splitArray2 = mergeSort(splitArray2)

  return merge(splitArray1,splitArray2)
}


function merge(array1, array2) {
  let mergedArray = []

  while(array1.length > 0 && array2.length > 0){
    if(array1[0]<array2[0]) mergedArray.push(array1.shift())
    else mergedArray.push(array2.shift())
  }

  while(array1.length > 0) mergedArray.push(array1.shift())
  while(array2.length > 0) mergedArray.push(array2.shift())

  return mergedArray
}
