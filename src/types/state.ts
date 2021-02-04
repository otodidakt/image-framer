import { Crop } from 'react-image-crop'

export interface PagesReducer {
  page: number
}
export interface CanvasReducer {
  imageUrl?: string
  completedCrop?: Crop
}

export interface RootStore {
  pages: PagesReducer
  canvas: CanvasReducer
}
