import { expect } from 'chai'
import fibonacci from '../functions/fibonacci'

describe('fibonacci()', () => {
  it('return fibonacci array of size input n', () => {
    expect(fibonacci(10)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })
})
