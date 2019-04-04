const redux = require('redux')

const initialState = [
  {
    name: 'First dog',
    isAGoodBoy: true
  }
]

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_DOG':
      return [
        ...state,
        { ...action.payload }
      ]

    case 'SET_DOGS':
        // map creates a new array and iterates over it
        return action.payload.map(dog => {
          // { ...dog } creates a shallow copy of dog element
          return { ...dog }
        })

    default:
      return state
  }
}

const store = redux.createStore(reducer)

console.log('Initial state of the store', store.getState())

store.subscribe(() => console.log('Next state:', store.getState()))

const action = {
  type: 'ADD_DOG',
  payload: {
    name: 'Second dog',
    isAGoodBoy: false
  }
}

store.dispatch(action)

// Add action SET_DOGS with payload being an array
const action2 = {
  type: 'SET_DOGS',
  payload: [
    {
      name: 'The new Dog in town',
      isAGoodBoy: true
    },
    {
      name: 'Snoop Dog',
      isAGoodBoy: false
    }
  ]
}

store.dispatch(action2)

module.exports = { reducer }