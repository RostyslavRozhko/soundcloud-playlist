import { SET_PLAYLIST } from '../constants'
import { MOVE_ITEMS } from '../constants'
import { START_PLAYING, PAUSE, PLAY, STOP } from '../constants'

// import { arrayMove } from 'react-sortable-hoc'

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
    case MOVE_ITEMS:
      return Object.assign({}, state,
        {
          tracks: action.tracks,
          currentSongPosition: action.index
        })
    default:
      return state
  }
}
