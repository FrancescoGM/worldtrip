import React from 'react'
import { Box, Flex, Text, SimpleGrid } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

interface CardCityProps {
  cityName: string
  countryName: string
  imageUrl: string
  iconUrl: string
}

export function CardCity({
  cityName,
  countryName,
  iconUrl,
  imageUrl
}: CardCityProps) {
  return (
    <Box w="256px">
      <Flex maxH="173px" overflow="hidden" align="center" borderTopRadius="4px">
        <Image w="100%" src={imageUrl} alt={cityName} />
      </Flex>
      <Box
        borderBottomRadius="4px"
        borderWidth="1px"
        borderColor="yellow.500"
        borderTop="none"
      >
        <Flex px="6" py="4" justify="space-between" align="center">
          <Flex justify="space-between" direction="column">
            <Text fontSize="Barlow, sans-serif" fontWeight="semibold">
              {cityName}
            </Text>
            <Text
              mt="3"
              fontSize="Barlow, sans-serif"
              fontWeight="medium"
              color="gray.300"
            >
              {countryName}
            </Text>
          </Flex>

          <Image
            w="30px"
            h="30px"
            borderRadius="50%"
            src={iconUrl}
            alt={`${cityName} flag`}
          />
        </Flex>
      </Box>
    </Box>
  )
}
