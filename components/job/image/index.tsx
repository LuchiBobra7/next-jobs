import React from 'react'
import { Box } from '@chakra-ui/react'
import Image from 'components/image'
import { JobImage as JobImageProps } from 'types/job'
import { JOB_IMAGE_PREVIEW_SIZE } from 'constants/layout'

const JobImage = ({
  size = JOB_IMAGE_PREVIEW_SIZE,
  borderRadius = '50%',
  src = '',
  title = 'Image',
  fallbackSrc = '/job.svg',
  ...props
}: JobImageProps) => {
  return (
    <Box
      flexShrink={0}
      position="relative"
      width={size}
      height={size}
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <Image
        width={size}
        height={size}
        borderRadius={borderRadius}
        src={src || fallbackSrc}
        alt={title}
        loading="lazy"
        position="relative"
        lineHeight={2}
        overflow="hidden"
        //Fallback for broken image
        _before={{
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `url(${fallbackSrc}) no-repeat`,
          backgroundSize: 'cover',
          left: '0px',
          display: 'flex',
        }}
      />
    </Box>
  )
}

export default JobImage
