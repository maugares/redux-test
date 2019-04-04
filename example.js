// NOTES WITH DEFINITIONS

const initialState = {
  firstName: 'Test',
  lastName: 'Me'
}

// Pure function that takes the currenState and an action and returns a new state
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_FIRST_NAME':
      return {
        ...state,
        firstName: action.payload
      }
    case 'SET_LAST_NAME':
      return {
        ...state,
        lastName: action.payload
      }
    default:
      return state
  }
}

// Action is an object with a type and optionally a payload
const action = {
  type: 'SET_FIRST_NAME',
  payload: 'Rein'
}

// Store
// Contains:
// - State
// - Reducers (function that can change the state)
// - methods for interacting with the store
//         - store.getState() // returns current state
//         - store.subscribe(handler) // adds handler that gets called when an action is processed
//         - store.dispatch(action) // dispatches action to all reducers (so it can be handled)