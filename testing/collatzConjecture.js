import { expect } from 'chai'
import collatzConjecture from '../functions/collatzConjecture'


describe('#collatzConjecture', function() {
  context('takes an integer', function() {
    it('should return an array of the Collatz Sequence of the input integer', function() {

      expect(collatzConjecture(7)).to.eql([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
    })
  })
})
