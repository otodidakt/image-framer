import { AnyAction } from 'redux'
import { PAGES } from './initial'

export function pagesReducer(state = PAGES, action: AnyAction) {
  switch (action.type) {
    case 'SET_PAGE':
      return {
        ...state,
        page: action.page,
      }
    default:
      return state
  }
}
