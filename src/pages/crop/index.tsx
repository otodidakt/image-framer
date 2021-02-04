import { useState, useCallback, useRef, useEffect } from 'react'
import ReactCrop, { Crop } from 'react-image-crop'
import { Button } from 'antd'
import 'react-image-crop/dist/ReactCrop.css'
import { useDispatch, useSelector } from 'react-redux'
import { cropCompleted, imageUploaded } from 'store/actions/canvas'
import { setCurrentPage } from 'store/actions/pages'
import { getCompletedCrop, getImageUrl } from 'store/selectors/canvas'
import { defaultCrop } from './constant'
import { drawCroppedImage } from './utils'

function CropPage() {
  const dispatch = useDispatch()
  const imageUrl = useSelector(getImageUrl)
  const imgRef = useRef(null)
  const [crop, setCrop] = useState(defaultCrop)
  const completedCrop = useSelector(getCompletedCrop)

  const onComplete = (nextCrop: Crop) => {
    dispatch(cropCompleted(nextCrop))
  }

  const onLoad = useCallback((img) => {
    imgRef.current = img
  }, [])

  const next = () => {
    const canvas = document.getElementById(
      'preview-canvas',
    ) as HTMLCanvasElement
    const nextImageUrl = canvas.toDataURL()
    dispatch(imageUploaded(nextImageUrl))
    dispatch(setCurrentPage(3))
  }

  useEffect(() => {
    drawCroppedImage(completedCrop, imgRef)
  }, [completedCrop])

  return (
    <>
      <ReactCrop
        src={imageUrl}
        onImageLoaded={onLoad}
        crop={crop}
        onChange={(c) => setCrop(c)}
        onComplete={onComplete}
      />
      <Button onClick={next}>Next</Button>
    </>
  )
}

export default CropPage
