import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { initialState } from './reducers/initial'
import rootReducer from './reducers'

const logger = createLogger({
  collapsed: true,
})

const store = createStore(rootReducer, initialState, applyMiddleware(logger))

export default store
