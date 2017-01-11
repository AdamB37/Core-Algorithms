import { expect } from 'chai'
import isFactorial from '../functions/isFactorial'

describe('isFactorial', () => {
  context('when given a number', () => {
    it('should return the isFactorial', () => {
      expect(isFactorial(5)).to.equal(120)
    })
  });

  context('when given a negetive number', () =>{
    it('should retrn an undefined', () => {
      expect(isFactorial(-5)).to.equal(undefined)
    })
  })
});
