import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import playlist from './playlist'


const rootReducer = combineReducers({
  playlist,
  routing
})


export default rootReducer
