import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from 'store/actions/pages'

const StartPage = () => {
  const dispatch = useDispatch()
  const start = () => {
    dispatch(setCurrentPage(1))
  }

  return (
    <Button onClick={start} type="primary">
      Start
    </Button>
  )
}

export default StartPage
