import { Crop } from 'react-image-crop'

export function drawCroppedImage(
  completedCrop: Crop,
  imgRef: {
    current: HTMLImageElement
  },
) {
  if (!completedCrop || !imgRef.current) {
    return
  }

  const image = imgRef.current
  const canvas = document.getElementById('preview-canvas') as HTMLCanvasElement
  const crop = completedCrop

  const scaleX = image.naturalWidth / image.width
  const scaleY = image.naturalHeight / image.height
  const ctx = canvas.getContext('2d')
  const pixelRatio = window.devicePixelRatio

  canvas.width = crop.width * pixelRatio
  canvas.height = crop.height * pixelRatio

  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
  ctx.imageSmoothingQuality = 'high'

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height,
  )
}
