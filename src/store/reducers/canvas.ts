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
    default:
      return state
  }
}
