import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import player from './player'
import PATH from '../constants'


const rootReducer = combineReducers({
  routing
})

export default rootReducer
