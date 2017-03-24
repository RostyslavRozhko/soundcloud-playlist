import { SET_PLAYLIST, MOVE_ITEMS, DELETE } from '../constants'
import { START_PLAYING, PAUSE, PLAY, STOP } from '../constants'

// import { arrayMove } from 'react-sortable-hoc'

export default function playlist(state = {}, action){
  switch(action.type){
    case SET_PLAYLIST:
      return Object.assign({}, state, action.data)
    case START_PLAYING:
      return {
        ...state,
        isPlaying: true,
        currentSongPosition: action.id,
        currentSong: state.tracks[action.id],
        player: action.player
      }
    case PAUSE:
      state.player.pause()
      return {
        ...state,
        isPlaying: false,
      }
    case PLAY:
      state.player.play()
      return {
        ...state,
        isPlaying: true,
      }
    case STOP:
      return {
          ...state,
          player: null
        }
    case MOVE_ITEMS:
      return {
          ...state,
          tracks: action.tracks,
          currentSongPosition: action.index
        }
    case DELETE:
      return {
        ...state,
        tracks: [
          ...state.tracks.slice(0, action.index),
          ...state.tracks.slice(action.index + 1)
        ],
        currentSongPosition: state.currentSongPosition > action.index ? state.currentSongPosition - 1 : state.currentSongPosition
      }
    default:
      return state
  }
}
