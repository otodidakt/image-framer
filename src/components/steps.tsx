import { Steps } from 'antd'
import { STEP_MAPPINGS } from 'config/steps'

const { Step } = Steps

type Props = {
  page: number
  setPage: (p: number) => void
}

const StepsComponent: React.FC<Props> = ({ page, setPage }) => {
  return (
    <Steps current={page} onChange={setPage} direction="vertical">
      {STEP_MAPPINGS.map((mapping) => (
        <Step key={mapping.title} title={mapping.title} />
      ))}
    </Steps>
  )
}

export default StepsComponent
