import { SET_PLAYLIST } from '../constants'
import { START_PLAYING, PAUSE, PLAY } from '../constants'

export default function playlist(state = {}, action){
  switch(action.type){
    case SET_PLAYLIST:
      return Object.assign({}, state, action.data)
    case START_PLAYING:
      let obj = Object.assign({}, state.tracks)
      obj[action.id] = Object.assign({}, obj[action.id], {
        isCurrent: true
      })
      return Object.assign({}, state,
      {
        isPlaying: true,
        currentSong: action.id,
        player: action.player,
        tracks: obj
      })
    case PAUSE:
      state.player.pause()
      return Object.assign({}, state,
      {
        isPlaying: false,
      })
    case PLAY:
      state.player.play()
      return Object.assign({}, state,
      {
        isPlaying: true,
      })
    default:
      return state
  }
}
