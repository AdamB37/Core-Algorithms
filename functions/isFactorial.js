export default function isFactorial(number) {
  if(number == 0) {
    return 1;
  }
  if(number < 0 ) {
    return undefined;
  } else
    return number * isFactorial(number-1)
}
