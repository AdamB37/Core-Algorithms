import { expect } from 'chai'
import closestPair from '../functions/closestPair'


const points = [
  [2,1],
  [4,0],
  [-1,0],
  [5,3],
  [-2,5],
  [3,-3],
  [-2,0],
  [3,4],
  [5,-4],
  [0,-2]
]

describe('closestPair()', () => {
  it('return the pair with the closest distance', () => {
    expect(closestPair(points)).to.deep.equal({ pair: [[-1, 0], [-2, 0]], distance: 1 })
  })
})
