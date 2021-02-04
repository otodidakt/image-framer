import { CanvasReducer, PagesReducer, RootStore } from 'types/state'

export const PAGES: PagesReducer = {
  page: 0,
}

export const CANVAS: CanvasReducer = {
  text: {
    text: '',
    bgColor: 'blue',
    fontSize: 20,
    fontColor: 'white',
    align: 'center',
  },
}

export const initialState: RootStore = {
  pages: PAGES,
  canvas: CANVAS,
}
