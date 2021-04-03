import React from 'react'
import ellipseICon from '../assets/icons/ellipse.svg'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'

interface TravelItemProps {
  icon: any
  children?: string
  isWideVersion?: boolean
}

export const TravelItem: React.FC<TravelItemProps> = ({
  icon,
  children = '',
  isWideVersion = false
}) => {
  if (!isWideVersion) {
    return (
      <Flex align="center" direction="row">
        <Icon
          as={isWideVersion ? icon : ellipseICon}
          w="8px"
          h="8px"
          mt="6px"
        />
        <Text
          fontSize="2xl"
          fontWeight="semibold"
          color="gray.600"
          pl="8px"
          pt="0"
        >
          {children}
        </Text>
      </Flex>
    )
  }
  return (
    <Box align="center">
      <Icon as={icon} w="85px" h="85px" />
      <Text fontSize="2xl" fontWeight="semibold" color="gray.600" pt="6">
        {children}
      </Text>
    </Box>
  )
}
