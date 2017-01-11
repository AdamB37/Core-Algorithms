export default function isFactorial(x) {
  if(x == 0) {
    return 1;
  }
  if(x < 0 ) {
    return undefined;
  } else
    return x * isFactorial(x-1)
}
