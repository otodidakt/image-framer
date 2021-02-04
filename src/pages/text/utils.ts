import { ArcText } from '../../types/state'

const BASE_START_ANGLE = Math.PI / 2

export const drawArcText = (baseImg: HTMLImageElement, arcText: ArcText) => {
  const canvas = document.getElementById('preview-canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')

  const { bgColor, text, fontSize, fontColor } = arcText
  const { width, height } = canvas
  const xCenter = width / 2
  const yCenter = height / 2
  const baseRadius = height / 2

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.drawImage(baseImg, 0, 0)
  ctx.globalCompositeOperation = 'destination-in'
  ctx.beginPath()
  ctx.arc(xCenter, yCenter, baseRadius - fontSize * 2, 0, 2 * Math.PI)
  ctx.closePath()
  ctx.fill()

  ctx.globalCompositeOperation = 'destination-over'
  ctx.fillStyle = bgColor
  ctx.beginPath()
  ctx.arc(xCenter, yCenter, baseRadius, 0, 2 * Math.PI)
  ctx.closePath()
  ctx.fill()

  ctx.font = fontSize + 'px verdana'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'bottom'
  ctx.fillStyle = fontColor
  ctx.strokeStyle = fontColor
  ctx.globalCompositeOperation = 'source-over'

  const radius = baseRadius - (fontSize / 2)

  const pixelAngularSize = 1 / radius
  const textWidth = ctx.measureText(text).width

  let angle = BASE_START_ANGLE + pixelAngularSize * (textWidth / 2)

  for (let i = 0; i < text.length; i += 1) {
    const character = text[i]
    const characterAngularWidth = ctx.measureText(character).width * pixelAngularSize

    const xDx = Math.cos(angle - characterAngularWidth / 2)
    const xDy = Math.sin(angle - characterAngularWidth / 2)

    ctx.setTransform(xDy, -xDx, xDx, xDy, xDx * radius + xCenter, xDy * radius + yCenter)
    ctx.fillText(text[i], 0, 0)
    angle -= characterAngularWidth
  }

  ctx.setTransform(1, 0, 0, 1, 0, 0)


}
