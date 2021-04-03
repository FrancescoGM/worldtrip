import React from 'react'
import { Flex, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex as="header" w="100%" h="100px" justify="center" align="center">
      <Image src="/images/logo.svg" alt="Logo Worldtrip" />
    </Flex>
  )
}
