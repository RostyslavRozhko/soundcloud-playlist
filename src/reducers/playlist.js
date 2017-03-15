import { SET_PLAYLIST } from '../constants'
import { START_PLAYING, PAUSE, PLAY, STOP } from '../constants'

export default function playlist(state = {}, action){
  switch(action.type){
    case SET_PLAYLIST:
      return Object.assign({}, state, action.data)
    case START_PLAYING:
      return Object.assign({}, state,
      {
        isPlaying: true,
        currentSongPosition: action.id,
        currentSong: state.tracks[action.id],
        player: action.player
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
    case STOP:
      return Object.assign({}, state,
        {
          player: null
        })
    default:
      return state
  }
}
