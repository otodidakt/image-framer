import { Crop } from 'react-image-crop'

export function imageUploaded(imageUrl: string) {
  return {
    type: 'IMAGE_UPLOADED',
    imageUrl,
  }
}

export function cropCompleted(completedCrop: Crop) {
  return {
    type: 'CROP_COMPLETED',
    completedCrop,
  }
}
