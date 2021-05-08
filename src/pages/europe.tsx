import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import {
  Flex,
  Image,
  Heading,
  useBreakpointValue,
  Text,
  Box,
  SimpleGrid
} from '@chakra-ui/react'
import { Header } from '../components/Header'
import { CountryInfo } from '../components/CountryInfo'
import { CardCity } from '../components/CardCity'
import { ContinentBanner } from '../components/ContinentBanner'

const data = {
  cities: [
    {
      city: 'Londres',
      country: 'Reino Unido',
      iconUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/255px-Flag_of_the_United_Kingdom.svg.png',
      imageUrl:
        'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
    },
    {
      city: 'Paris',
      country: 'França',
      iconUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png',
      imageUrl:
        'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    {
      city: 'Roma',
      country: 'França',
      iconUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png',
      imageUrl:
        'https://images.unsplash.com/photo-1529260830199-42c24126f198?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    {
      city: 'Praga',
      country: 'República Tcheca',
      iconUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/800px-Flag_of_the_Czech_Republic.svg.png',
      imageUrl:
        'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
    },
    {
      city: 'Amsterdâ',
      country: 'Holanda',
      iconUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png',
      imageUrl:
        'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    }
  ]
}

const EuropePage: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <>
      <Head>
        <title>Europa | Worldtrip</title>
      </Head>
      <Header backTo />
      <Flex
        as="main"
        w="100%"
        align="center"
        justify="center"
        direction="column"
        pb="8"
      >
        <ContinentBanner
          title="Europa"
          bannerUrl="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
        />
        <Box
          w="100%"
          maxW="1144px"
          mx="auto"
          px="4"
          pt={isWideVersion ? '20' : '6'}
        >
          <Flex
            as="section"
            w="100%"
            align="center"
            justify="space-between"
            direction={['column', 'column', 'column', 'column', 'initial']}
          >
            <Text
              maxW={600}
              textAlign="justify"
              fontFamily="poppins, sans-serif"
              fontSize={isWideVersion ? '2xl' : 'sm'}
              mr={['initial', 'initial', 'initial', 'initial', '4.375rem']}
              mb={isWideVersion ? 'initial' : '4'}
            >
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
            <CountryInfo
              numberOfCities={100}
              numberOfCountry={50}
              numberOfLanguages={60}
              numberOfPrimaryCities={27}
            />
          </Flex>
          <Box as="section" mt={isWideVersion ? '14' : '8'} w="100%">
            <Text
              fontFamily="poppins, sans-serif"
              fontSize={isWideVersion ? '5xl' : '2xl'}
              fontWeight="medium"
              mb={isWideVersion ? '10' : '5'}
            >
              Cidades + 100
            </Text>
            <SimpleGrid
              spacing="4"
              spacingY="12"
              minChildWidth="256px"
              mx="auto"
              justifyContent="center"
            >
              {data.cities.map(city => (
                <CardCity cardData={city} mx="auto" />
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default EuropePage
