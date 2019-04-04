const redux = require('redux')

// Crate reducer
let reducer = (state = 1, action) => {
  return state
}

// Create store
const store = redux.createStore(reducer)
console.log(`Initial state of the store: ${store.getState()}`)

// Create action
store.subscribe(() => console.log('Next state:', store.getState()))

const action = {
  type: 'ADD_ONE'
}

// Dispatch action
store.dispatch(action)

// Add another action
const actionTwo = {
  type: 'ADD_TWO'
}

store.dispatch(actionTwo)

// Make the reducer respond to the actions
reducer = (state = 1, action = {}) => {
  switch (action.type) {
    case 'ADD_ONE':
      return state + 1
    case 'ADD_TWO':
      return state + 2
    default:
      return state
  }
}

module.exports = { reducer }