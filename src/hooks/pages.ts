import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from 'store/actions/pages'
import { getCurrentPage } from 'store/selectors/pages'

export function useCurrentPage() {
  const page = useSelector(getCurrentPage)
  const dispatch = useDispatch()

  const setPage = (nextPage: number) => {
    dispatch(setCurrentPage(nextPage))
  }

  return {
    page,
    setPage,
  }
}
