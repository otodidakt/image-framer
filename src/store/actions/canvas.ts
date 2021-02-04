import { Crop } from 'react-image-crop'
import { ArcText } from '../../types/state'

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

export function addedText(text: ArcText) {
  return {
    type: 'TEXT_ADDED',
    text,
  }
}
