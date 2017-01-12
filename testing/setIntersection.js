import { expect } from 'chai'
import setIntersection from '../functions/setIntersection'


describe('setIntersection()', function(){
  it('returns the intersectoin of the two arrays', function(){
    expect(setIntersection([1, 2, 3, 4], [2, 4, 6, 8])).to.eql([2, 4])
  })
})
