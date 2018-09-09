export const INCREMENT = 'INCREMENT'
export function increment() {
  return {
    type: INCREMENT
  }
}

export const DECREMENT = 'DECREMENT'
export function decrement() {
  return {
    type: DECREMENT
  }
}

export const RESET = 'RESET'
export function reset() {
  return {
    type: RESET
  }
}

function counter(state = 0, action) {
  switch(action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case RESET:
      return 0
    default:
      return state
  }
}

const reducer = Redux.combineReducers({
  counter
})

export default reducer
