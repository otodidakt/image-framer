import { STEP_MAPPINGS } from 'config/steps'
import { RootStore } from 'types/state'

export function getCurrentPage(state: RootStore) {
  return state.pages.page
}

export function getActivePageComponent(state: RootStore) {
  const page = getCurrentPage(state)

  return STEP_MAPPINGS.find((mapping) => mapping.page === page).component
}
