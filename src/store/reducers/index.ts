import { combineReducers } from 'redux'
import { pagesReducer } from './pages'
import { canvasReducer } from './canvas'

export default combineReducers({
  pages: pagesReducer,
  canvas: canvasReducer,
})
