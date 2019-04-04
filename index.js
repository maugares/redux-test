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

// Add more actions
const actionTwo = {
  type: 'ADD_TWO'
}

store.dispatch(actionTwo)

const actionThree = {
  type: 'ADD_THREE'
}

// Make the reducer respond to the actions
reducer = (state = 1, action = {}) => {
  switch (action.type) {
    case 'ADD_ONE':
      return state + 1
    case 'ADD_TWO':
      return state + 2
    case 'ADD_THREE':
      return state + 3
    default:
      return state
  }
}

module.exports = { reducer }