import { useSelector } from 'react-redux'
import { getCompletedCrop } from 'store/selectors/canvas'

const CanvasComponent = () => {
  const completedCrop = useSelector(getCompletedCrop)
  return (
    <canvas
      id="preview-canvas"
      // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
      style={{
        width: Math.round(completedCrop?.width ?? 0),
        height: Math.round(completedCrop?.height ?? 0),
      }}
    />
  )
}

export default CanvasComponent
