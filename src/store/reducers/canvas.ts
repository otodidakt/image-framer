import { AnyAction } from 'redux'
import { CANVAS } from './initial'

export function canvasReducer(state = CANVAS, action: AnyAction) {
  switch (action.type) {
    case 'IMAGE_UPLOADED':
      return {
        ...state,
        imageUrl: action.imageUrl,
      }
    case 'CROP_COMPLETED':
      return {
        ...state,
        completedCrop: action.completedCrop,
      }
    case 'TEXT_ADDED':
      return {
        ...state,
        text: action.text
      }
    default:
      return state
  }
}
