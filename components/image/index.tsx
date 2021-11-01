import NextImage from 'next/image'
import { chakra } from '@chakra-ui/react'

const Image = chakra(NextImage, {
  shouldForwardProp: (prop) => {
    return [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'blurDataURL',
      'placeholder',
      'fallback',
      'fallbackSrc',
    ].includes(prop)
  },
})

export default Image
