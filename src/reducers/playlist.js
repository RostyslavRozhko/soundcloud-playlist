import { SET_PLAYLIST } from '../constants'

export default function playlist(state = {}, action){
  switch(action.type){
    case SET_PLAYLIST:
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}
