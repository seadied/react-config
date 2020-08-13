import { ADD_TODO } from './actions'


const initState = {
  count: 1
}

function reducer(state = initState, action){
    const count = state.count
    switch(action.type){
      case ADD_TODO:
        return {
          count: count + 1
        }
      default:
        return state
    }
} 

export default reducer