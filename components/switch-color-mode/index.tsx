import React from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

const SwitchColorModeBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      onClick={toggleColorMode}
      fontSize="lg"
      aria-label="Toggle theme"
      icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
    />
  )
}

export default SwitchColorModeBtn
