import { Crop } from 'react-image-crop'

export type ArcText = {
  text?: string
  fontColor?: string
  fontSize?: number
  bgColor?: string
  align?: string
}

export interface PagesReducer {
  page: number
}
export interface CanvasReducer {
  imageUrl?: string
  completedCrop?: Crop
  text: ArcText
}

export interface RootStore {
  pages: PagesReducer
  canvas: CanvasReducer
}
