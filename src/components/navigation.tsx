import React from 'react'
import { Button } from 'antd'
import { ButtonWrapper } from './styled'

type Props = {
  page: number
  setPage: (p: number) => void
}

const NavigationComponent: React.FC<Props> = ({ page, setPage }) => {
  const onPrevious = () => {
    setPage(page - 1)
  }

  const onNext = () => {
    setPage(page + 1)
  }

  return (
    <ButtonWrapper>
      <Button onClick={onPrevious} disabled={page === 0}>
        Previous
      </Button>
      <Button onClick={onNext} disabled={page === 4} type="primary">
        Next
      </Button>
    </ButtonWrapper>
  )
}

export default NavigationComponent
