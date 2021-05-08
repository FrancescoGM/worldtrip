import React from 'react'
import { Box, Flex, Text, Image, BoxProps } from '@chakra-ui/react'

type CityData = {
  city: string
  country: string
  imageUrl: string
  iconUrl: string
}

interface CardCityProps extends BoxProps {
  cardData: CityData
}

export function CardCity({ cardData, ...rest }: CardCityProps) {
  return (
    <Box w="256px" {...rest}>
      <Flex maxH="173px" overflow="hidden" align="center" borderTopRadius="4px">
        <Image w="100%" src={cardData.imageUrl} alt={cardData.city} />
      </Flex>
      <Box
        h="100%"
        maxH="106px"
        borderBottomRadius="4px"
        borderWidth="1px"
        borderColor="yellow.500"
        borderTop="none"
      >
        <Flex px="6" py="4" justify="space-between" align="center">
          <Flex justify="space-between" direction="column">
            <Text fontSize="Barlow, sans-serif" fontWeight="semibold">
              {cardData.city}
            </Text>
            <Text
              mt="3"
              fontSize="Barlow, sans-serif"
              fontWeight="medium"
              color="gray.300"
            >
              {cardData.country}
            </Text>
          </Flex>

          <Image
            w="30px"
            h="30px"
            borderRadius="50%"
            src={cardData.iconUrl}
            alt={`${cardData.city} flag`}
          />
        </Flex>
      </Box>
    </Box>
  )
}
