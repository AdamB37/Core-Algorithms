import { expect } from 'chai'
import isConnectedGraph  from '../functions/isConnectedGraph'
const graphA = {
  'a': ['b', 'c'],
  'b': ['a', 'd'],
  'c': ['a', 'd'],
  'd': ['b', 'c'],
}
const graphB = {
  'a': ['b'],
  'b': ['a'],
  'c': ['d'],
  'd': ['c'],
}
describe('isConnectedGraph()', ()=>{
  context('takes in an Object Graph', () =>{
    it('should return true if all the vertices in the graph are connected', () =>{
      expect(isConnectedGraph(graphA)).to.eql(true)
    })
    it('should return false if vertices in the graph are not connected', ()=>{
      expect(isConnectedGraph(graphB)).to.eql(false)
    })
  })
})
