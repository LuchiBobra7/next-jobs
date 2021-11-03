import React from 'react'
import EmptyData from 'components/empty-data'

const NoMatch = () => {
  return (
    <EmptyData
      imgSrc="/error.svg"
      text="Houston, we have a problem…"
      search={false}
    />
  )
}

export default NoMatch