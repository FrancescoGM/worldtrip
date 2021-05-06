import React from 'react'
import { Flex, Image, Button, Icon, useBreakpointValue } from '@chakra-ui/react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { useRouter } from 'next/router'

interface HeaderProps {
  backTo?: boolean
}

export const Header: React.FC<HeaderProps> = ({ backTo = false }) => {
  const { back } = useRouter()
  const isWideVersion = useBreakpointValue({
    sm: true,
    base: false
  })
  return (
    <Flex as="header" w="100%" h="100px" justify="center" align="center" px="4">
      <Flex
        as="div"
        w="100%"
        maxW={1160}
        justify="center"
        align="center"
        position="relative"
      >
        {isWideVersion && backTo && (
          <Button
            onClick={back}
            variant="unstyled"
            aria-label="Voltar"
            position="absolute"
            left="0"
          >
            <Icon as={IoChevronBackOutline} />
          </Button>
        )}
        <Image src="/images/logo.svg" alt="Logo Worldtrip" />
      </Flex>
    </Flex>
  )
}
