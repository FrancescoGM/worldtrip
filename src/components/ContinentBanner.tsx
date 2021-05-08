import React from 'react'
import { Flex, Heading, useBreakpointValue } from '@chakra-ui/react'

interface ContinentBannerProps {
  bannerUrl: string
  title: string
}

export function ContinentBanner({ bannerUrl, title }: ContinentBannerProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true
  })
  return (
    <Flex
      as="header"
      w="100%"
      h={['150px', '350px', '500px']}
      backgroundImage={`url("${bannerUrl}")`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        w="100%"
        maxW="1144px"
        mx="auto"
        px="4"
        py="14"
        align={isWideVersion ? 'flex-end' : 'center'}
        justify={isWideVersion ? 'left' : 'center'}
      >
        <Heading
          color="gray.50"
          fontFamily="poppins, sans-serif"
          fontSize={isWideVersion ? '7xl' : '4xl'}
          fontWeight="semibold"
        >
          {title}
        </Heading>
      </Flex>
    </Flex>
  )
}
