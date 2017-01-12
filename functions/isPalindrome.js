export default function isPalindrome(string) {
  string = string.replace(/(?!\w)./g,'').toLowerCase()
  for( let i = 0; i < string.length; i++ ) {
    if(string[i]!==string[string.length-i-1]) return false
  }
  return true
}
