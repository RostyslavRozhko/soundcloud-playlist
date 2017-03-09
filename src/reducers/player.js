import { START_PLAYING } from '../constants'

export default function player(state = {}, action){
  switch(action.type){
    case START_PLAYING:
      return Object.assign({}, state,
      {
        isPlaying: true,
        currentSong: id
      })
    default:
      return state
  }
}
