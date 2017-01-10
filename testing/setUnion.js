import { expect } from 'chai'
import setUnion from '../functions/setUnion'

describe('setUnion()', function(){
  context('Take two sets of arrays', function(){
    it('should return the union of the two arrays', function(){
      expect(setUnion([1, 2, 3, 4], [2, 4, 6, 8])).to.eql([1, 2, 3, 4, 6, 8])
    })
  })
})
