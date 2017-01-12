import { expect } from 'chai'
import isFactorial from '../functions/isFactorial'

describe('isFactorial', () => {

  it('returns 120 (factorial of 5)', () => {
    expect(isFactorial(5)).to.equal(120)
  })



  it('returns undefined for negative integer', () => {
    expect(isFactorial(-5)).to.equal(undefined)
  })

});
