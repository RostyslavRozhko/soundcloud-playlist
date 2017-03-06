import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import player from './player'

const rootReducer = combineReducers({
  player,
  routing
})

export default rootReducer
