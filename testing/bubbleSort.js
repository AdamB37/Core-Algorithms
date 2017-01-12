import { expect } from 'chai'
import bubbleSort from '../functions/bubbleSort.js'

describe('#bubbleSort', () => {
  it('returns an array of sorted integers using bubbleSort', ()=>{
    expect(bubbleSort([5,1,4,2,8])).to.deep.equal([1,2,4,5,8])
  })
})
