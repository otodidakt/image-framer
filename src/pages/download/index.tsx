import { Button } from 'antd'

const DownloadPage = () => {

  const downloadImage = () => {
    const link = document.createElement('a')
    link.download = 'framedimage.png'
    const canvas = document.getElementById('preview-canvas') as HTMLCanvasElement
    link.href = canvas.toDataURL()
    link.click()
  }

  return <Button type='primary' onClick={downloadImage}> Download Image </Button>
}

export default DownloadPage
