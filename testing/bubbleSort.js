import { expect } from 'chai'
import bubbleSort from '../functions/bubbleSort.js'

describe('#bubbleSort', () => {
  context('takes an array of unsorted integers', () => {
    it('should return an array of sorted integers using bubbleSort', ()=>{
      expect(bubbleSort([5,1,4,2,8])).to.eql([1,2,4,5,8])
    })
  })
})
