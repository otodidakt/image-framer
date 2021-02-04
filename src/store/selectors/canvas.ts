import { RootStore } from 'types/state'

export function getImageUrl(state: RootStore) {
  return state.canvas.imageUrl
}

export function getCompletedCrop(state: RootStore) {
  return state.canvas.completedCrop
}
