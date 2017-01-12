import { expect } from 'chai'
import setSymmetricDifference from '../functions/setSymmetricDifference'


describe('setSymmetricDifference()', function(){
  it('return an array with the differenct elements from two arrays', function(){
    expect(setSymmetricDifference([1, 2, 3, 4], [2, 4, 6, 8])).to.eql([1, 3, 6, 8])
  })
})
