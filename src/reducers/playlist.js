import { SET_PLAYLIST } from '../constants'
// import { merge } from 'lodash/merge'

export default function playlist(state = {}, action){
  switch(action.type){
    case SET_PLAYLIST:
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}
