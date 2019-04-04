const { reducer } = require('./index')

test('Initial state should contain one dog', () => {
  expect(reducer().length).toBe(1)
})

test('ADD_DOG should add a new dog to the state', () => {
  const action = {
    type: 'ADD_DOG',
    payload: {
      name: 'Second dog',
      isAGoodBoy: false
    }
  }
  const initialState = []
  // this deep clones the initial state, so we can check for mutations
  const originalStateFrozen = JSON.parse(JSON.stringify(initialState))
  expect(reducer(initialState, action).length).toBe(1)
  // checks for mutations in the state
  expect(originalStateFrozen).toEqual(initialState)
})

test('It should be possible to add two dogs to the state', () => {
  const actionOne = {
    type: 'ADD_DOG',
    payload: {
      name: 'Snoop Dog',
      isAGoodBoy: true
    }
  }
  const actionTwo = {
    type: 'ADD_DOG',
    payload: {
      name: 'The new Dog in town',
      isAGoodBoy: true
    }
Jav