import {PAUSE, PLAY, NEXT, PREV} from '../constants';

const initialState = [
  {
    isPlaying: true
  }
]

export default function player(state = initialState, action) {
  switch (action.type) {
    case PAUSE:
      return
        {
          isPlaying: true
        }

    default:
      return state
  }
}
