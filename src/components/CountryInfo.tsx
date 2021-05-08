import React from 'react'
import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'

interface CountryInfoProps {
  numberOfCountry: number
  numberOfLanguages: number
  numberOfPrimaryCities: number
  numberOfCities: number
}

interface TextInfoProps {
  number: number
  text: string
}

function TextInfo({ number, text }: TextInfoProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true
  })
  return (
    <Text
      textAlign={isWideVersion ? 'center' : 'left'}
      fontSize={isWideVersion ? '2xl' : 'lg'}
      fontWeight="semibold"
    >
      <Text
        fontSize={isWideVersion ? '7xl' : '2xl'}
        color="yellow.500"
        lineHeight={isWideVersion ? '4rem' : '1rem'}
      >
        {number}
      </Text>
      {text}
    </Text>
  )
}

export function CountryInfo({
  numberOfCities,
  numberOfCountry,
  numberOfLanguages,
  numberOfPrimaryCities
}: CountryInfoProps) {
  return (
    <Flex w="100%" justify="space-between" maxW="500px">
      <TextInfo number={numberOfCountry} text="Países" />
      <TextInfo number={numberOfLanguages} text="Línguas" />
      <TextInfo
        number={numberOfPrimaryCities}
        text={`Cidades + ${numberOfCities}`}
      />
    </Flex>
  )
}
