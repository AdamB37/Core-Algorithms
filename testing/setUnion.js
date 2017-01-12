import { expect } from 'chai'
import setUnion from '../functions/setUnion'

describe('setUnion()', function(){
  it('return the union of the two arrays', function(){
    expect(setUnion([1, 2, 3, 4], [2, 4, 6, 8])).to.deep.equal([1, 2, 3, 4, 6, 8])
  })
})
