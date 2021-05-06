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
        <Flex
          as="header"
          width="100%"
          maxH="500px"
          overflow="hidden"
          align="center"
        >
          <Image
            w="100%"
            src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
            alt="Europa"
          />
        </Flex>
        <Box
          w="100%"
          maxW="1144px"
          mx="auto"
          position="relative"
          px="4"
          pt="20"
        >
          <Heading
            position="absolute"
            top={isWideVersion ? '-120px' : '-80px'}
            color="gray.50"
            fontFamily="poppins, sans-serif"
            fontSize={isWideVersion ? '7xl' : '4xl'}
            fontWeight="semibold"
          >
            Europa
          </Heading>
          <Flex as="section" w="100%" align="center" justify="space-between">
            <Text
              maxW={600}
              textAlign="justify"
              fontFamily="poppins, sans-serif"
              fontSize="2xl"
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
          <Box as="section" mt="14" w="100%">
            <Text
              fontFamily="poppins, sans-serif"
              fontSize="5xl"
              fontWeight="medium"
              mb="10"
            >
              Cidades + 100
            </Text>
            <SimpleGrid
              spacing="4"
              minChildWidth="256px"
              mx="auto"
              justifyContent="center"
            >
              <CardCity
                cityName="Paris"
                countryName="França"
                iconUrl="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
                imageUrl="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              />
              <CardCity
                cityName="Paris"
                countryName="França"
                iconUrl="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
                imageUrl="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              />
              <CardCity
                cityName="Paris"
                countryName="França"
                iconUrl="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
                imageUrl="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              />
              <CardCity
                cityName="Paris"
                countryName="França"
                iconUrl="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
                imageUrl="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              />
              <CardCity
                cityName="Paris"
                countryName="França"
                iconUrl="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
                imageUrl="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              />
              <CardCity
                cityName="Paris"
                countryName="França"
                iconUrl="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
                imageUrl="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              />
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default EuropePage
