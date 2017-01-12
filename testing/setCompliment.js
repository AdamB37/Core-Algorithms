import {expect} from 'chai'
import setCompliment from '../functions/setCompliment'

describe( 'setCompliment()', () => {
  it( 'the compliment of two arrays', () => {
    expect(setCompliment([1,2,3,4],[2,4,6,8])).to.deep.equal([6,8])
  })
})
