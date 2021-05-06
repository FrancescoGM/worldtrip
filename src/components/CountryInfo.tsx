import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

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
  return (
    <Text textAlign="center" fontSize="2xl" fontWeight="semibold">
      <Text fontSize="7xl" color="yellow.500" lineHeight="4rem">
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
    <Flex gridGap="3.75rem">
      <TextInfo number={numberOfCountry} text="Países" />
      <TextInfo number={numberOfLanguages} text="Línguas" />
      <TextInfo
        number={numberOfPrimaryCities}
        text={
          numberOfCities > 100 ? `Cidades + 100` : `Cidades ${numberOfCities}`
        }
      />
    </Flex>
  )
}
