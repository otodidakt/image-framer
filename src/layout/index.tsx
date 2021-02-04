import StepsComponent from 'components/steps'
import { useCurrentPage } from 'hooks/pages'
import { useSelector } from 'react-redux'
import { getActivePageComponent } from 'store/selectors/pages'
import NavigationComponent from 'components/navigation'
import { SectionWrapper, RootWrapper } from './styled'
import CanvasComponent from 'components/canvas'

const MainLayout = () => {
  const { page, setPage } = useCurrentPage()
  const ActivePage = useSelector(getActivePageComponent)

  return (
    <RootWrapper>
      <SectionWrapper span={4}>
        <StepsComponent page={page} setPage={setPage} />
      </SectionWrapper>
      <SectionWrapper span={8}>
        <ActivePage />
        <NavigationComponent page={page} setPage={setPage} />
      </SectionWrapper>
      <SectionWrapper span={8}>
        <CanvasComponent />
      </SectionWrapper>
    </RootWrapper>
  )
}

export default MainLayout
