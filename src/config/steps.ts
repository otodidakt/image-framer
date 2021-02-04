import StartPage from 'pages/start'
import UploadPage from 'pages/upload'
import CropPage from 'pages/crop'
import TextPage from 'pages/text'
import DownloadPage from 'pages/download'

type Mapping = {
  page: number
  title: string
  component: React.ComponentType
}

export const STEP_MAPPINGS: Mapping[] = [
  {
    page: 0,
    title: 'Start',
    component: StartPage,
  },
  {
    page: 1,
    title: 'Upload',
    component: UploadPage,
  },
  {
    page: 2,
    title: 'Crop',
    component: CropPage,
  },
  {
    page: 3,
    title: 'Text',
    component: TextPage,
  },
  {
    page: 4,
    title: 'Download',
    component: DownloadPage,
  },
]
