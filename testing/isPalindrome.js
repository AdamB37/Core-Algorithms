import { expect } from 'chai'
import isPalindrome from '../functions/isPalindrome'

describe('isPalindrome()', () => {
  it('return true if string is palindrom', () => {
    expect(isPalindrome('radar')).to.deep.equal(true)
    expect(isPalindrome('bananas')).to.deep.equal(false)
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.deep.equal(true)
  })
})
