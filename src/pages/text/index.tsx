import { Row, Col, InputNumber, Input, Typography } from 'antd'
import { ColorResult, CompactPicker } from 'react-color'
import { useDispatch, useSelector } from 'react-redux'
import { getArcText, getImageUrl } from '../../store/selectors/canvas'
import { useRef, useState, useEffect, ChangeEvent } from 'react'
import { drawArcText } from './utils'
import { addedText } from '../../store/actions/canvas'

const { Title } = Typography

const TextPage = () => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const dispatch = useDispatch()
  const text = useSelector(getArcText)
  const imageUrl = useSelector(getImageUrl)

  useEffect(() => {
    const img = new Image()
    img.src = imageUrl
    img.onload = () => {
      imgRef.current = img
      setImageLoaded(true)
    }
  }, [imageUrl])

  useEffect(() => {
    if (imgRef.current) {
      drawArcText(imgRef.current, text)
    }
  }, [text, imageLoaded])


  const handleBgChange = (result: ColorResult) => {
    dispatch(addedText({
      ...text,
      bgColor: result.hex,
    }))
  }

  const handleFontColorChange = (result: ColorResult) => {
    dispatch(addedText({
      ...text,
      fontColor: result.hex,
    }))
  }

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addedText({
      ...text,
      text: e.target.value,
    }))
  }

  const handleFontSizeChange = (fontSize: number | string) => {
    if (typeof fontSize !== 'number') return
    dispatch(addedText({
      ...text,
      fontSize,
    }))
  }

  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Title level={3}> Background Color </Title>
        <CompactPicker color={text.bgColor} onChangeComplete={handleBgChange} />
      </Col>
      <Col span={12}>
        <Title level={3}>Font Color </Title>
        <CompactPicker color={text.fontColor} onChangeComplete={handleFontColorChange} />
      </Col>
      <Col span={16}>
        <Title level={3}>Text</Title>
        <Input onChange={handleTextChange} value={text.text} />
      </Col>
      <Col span={16}>
        <InputNumber max={30} min={10} type='number' value={text.fontSize} onChange={handleFontSizeChange} />
      </Col>

    </Row>
  )
}

export default TextPage
