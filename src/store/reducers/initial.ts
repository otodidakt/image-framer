import { CanvasReducer, PagesReducer, RootStore } from 'types/state'

export const PAGES: PagesReducer = {
  page: 0,
}

export const CANVAS: CanvasReducer = {}

export const initialState: RootStore = {
  pages: PAGES,
  canvas: CANVAS,
}
