export default function fibonacci(n) {
  let fibonacci = [0,1]

  function recursiveFibonacci(array,index1,index2) {
    if( array.length < n ) {
      array.push(array[index1]+array[index2])
      return recursiveFibonacci(fibonacci,index1+1,index2+1)
    }
    return array
  }

  return recursiveFibonacci(fibonacci,0,1)
}
