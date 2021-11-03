import { Button, Icon } from '@chakra-ui/react'
import { shareButtonsData } from './share-buttons-data'

type Props = {
  copyUrlBtnValue: string
}

const ShareButtons = ({ copyUrlBtnValue }: Props) => {
  return (
    <>
      {shareButtonsData.map((item, i) => (
        <Button
          key={i}
          size="sm"
          as="a"
          href={`${item.url}=${encodeURI(copyUrlBtnValue)}`}
          colorScheme={item.title.toLowerCase()}
        >
          {item.icon && <Icon as={item.icon} mr={3} />}
          {item.title}
        </Button>
      ))}
    </>
  )
}

export default ShareButtons
