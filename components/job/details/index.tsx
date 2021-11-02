import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  Box,
  Flex,
  Heading,
  HStack,
  Button,
  Icon,
  VStack,
  Divider,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  useClipboard,
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import JobImage from 'components/job/image'
import ShareButtons from './share-buttons'
import { FiShare2 } from 'react-icons/fi'
import { JobDetails as JobDetailsProps } from 'types/job'
import { removeEmptyParams } from 'utils/index'

const JobDetails = ({ selectedJob }: JobDetailsProps) => {
  const currentUrl = () => {
    if (typeof window !== 'undefined') return window.location.href
    return 'Nothing here'
  }
  const [copyUrlBtnValue] = useState<string>(currentUrl)
  const { hasCopied, onCopy } = useClipboard(copyUrlBtnValue)
  const { push } = useRouter()
  return (
    <>
      <Flex justify="center" direction="column">
        <HStack spacing="2rem" mb={7} align="flex-start">
          <JobImage
            size="126px"
            borderRadius="full"
            src={selectedJob.company?.logoUrl}
            title={selectedJob.title}
            display={{ base: 'none', lg: 'block' }}
          />

          <VStack spacing="1rem" align="flex-start">
            <Heading size="lg" display="flex" mb={{ lg: 5 }}>
              {selectedJob.title}

              <JobImage
                size="46px"
                ml={4}
                borderRadius="md"
                src={selectedJob.company?.logoUrl}
                title={selectedJob.title}
                display={{ lg: 'none' }}
              />
            </Heading>

            <Box layerStyle="buttonList">
              <Button
                as={Link}
                colorScheme="brand"
                size="lg"
                href={selectedJob.applyUrl}
                target="_blank"
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                colorScheme="brand"
                size="lg"
                value={copyUrlBtnValue}
                onClick={onCopy}
              >
                {hasCopied ? 'Copied' : 'Copy url'}
              </Button>
              <Popover>
                <PopoverTrigger>
                  <Button variant="link" color="gray.400" p={0} fontSize="2xl">
                    <Icon as={FiShare2} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent width="10rem">
                  <PopoverArrow />
                  <PopoverBody
                    as={VStack}
                    spacing="0.5rem"
                    alignItems="stretch"
                  >
                    <ShareButtons copyUrlBtnValue={copyUrlBtnValue} />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
            <Divider />
            <Box layerStyle="buttonList">
              {selectedJob.tags?.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => {
                    const queryParams = removeEmptyParams({
                      q: item?.slug,
                    })

                    push(queryParams)
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </VStack>
        </HStack>
      </Flex>
      <Box layerStyle="content">
        <ReactMarkdown>{selectedJob.description as any}</ReactMarkdown>
      </Box>
    </>
  )
}

export default JobDetails
