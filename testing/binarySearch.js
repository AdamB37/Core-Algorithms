import { expect } from 'chai'
import binarySearch from '../functions/binarySearch'


describe('binarySearch()', function(){
  context('take a sorted array and a targeted value', function(){
    it('returns the targeted value', function(){
      expect(binarySearch([2, 4, 6, 8, 10, 12, 14, 16], 10)).to.deep.equal(4)
    })
  })
})
