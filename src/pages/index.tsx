import React from 'react'
import Head from 'next/head'

import cocktailIcon from '../assets/icons/cocktail.svg'
import surfIcon from '../assets/icons/surf.svg'
import buildingIcon from '../assets/icons/building.svg'
import museumIcon from '../assets/icons/museum.svg'
import earthIcon from '../assets/icons/earth.svg'
import { TravelItem } from '../components/TravelItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import { Header } from '../components/Header'
import {
  Box,
  Flex,
  Text,
  Image,
  useBreakpointValue,
  Divider
} from '@chakra-ui/react'
import { SwiperItem } from '../components/SwiperItem'

SwiperCore.use([Pagination, Navigation])

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>
      <Header />
      <Flex
        as="main"
        w="100%"
        align="center"
        justify="center"
        direction="column"
        mb={['6', '10']}
      >
        <Flex
          as="section"
          w="100%"
          backgroundImage="url('/images/background-airplane.png')"
          backgroundRepeat="no-repeat"
          backgroundSize="100% 21.5rem"
          justify="center"
          pt={['7', '20']}
          pb={['7', '7', '7', '0']}
        >
          <Flex w="100%" maxW={1160} justify="space-between" px="4">
            <Box>
              <Text
                as="h2"
                maxW="426px"
                color="gray.50"
                fontWeight="medium"
                fontSize={['xl', '4xl']}
                mb="0.5rem"
              >
                5 Continentes,
                <br /> infinitas possibilidades.
              </Text>
              <Text
                color="gray.100"
                maxW="524px"
                fontWeight="normal"
                fontSize={['md', 'xl']}
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Box>
            {isWideVersion && (
              <Image
                src="/images/airplane.svg"
                alt="airplane"
                transform="rotate(3deg)"
              />
            )}
          </Flex>
        </Flex>
        <Flex
          as="section"
          w="100%"
          maxW="1160px"
          mx="auto"
          justify={['center', 'center', 'space-between']}
          align="center"
          flexWrap="wrap"
          gridGap="6"
          px="6"
          pt={['9', '9', '9', '20']}
        >
          <TravelItem icon={cocktailIcon} isWideVersion={isWideVersion}>
            vida noturna
          </TravelItem>
          <TravelItem icon={surfIcon} isWideVersion={isWideVersion}>
            praia
          </TravelItem>
          <TravelItem icon={buildingIcon} isWideVersion={isWideVersion}>
            moderno
          </TravelItem>
          <TravelItem icon={museumIcon} isWideVersion={isWideVersion}>
            clássico
          </TravelItem>
          <TravelItem icon={earthIcon} isWideVersion={isWideVersion}>
            e mais...
          </TravelItem>
        </Flex>
        <Divider
          w={['60px', '90px']}
          h="2px"
          bg="gray.600"
          mt={['9', '20']}
          mb={['6', '14']}
        />
        <Text
          textAlign="center"
          fontSize={['xl', '4xl']}
          fontWeight="medium"
          mb="14"
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          style={{
            width: '100%',
            height: isWideVersion ? '450px' : '250px',
            maxWidth: '1240px'
          }}
        >
          <SwiperSlide>
            <SwiperItem
              navigateTo="europe"
              url="https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt="Europa"
              title="Europa"
              subtitle="O continente mais antigo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem
              navigateTo="europe"
              url="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt="África"
              title="África"
              subtitle="O continente mais seco"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem
              navigateTo="europe"
              url="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt="América"
              title="América"
              subtitle="O continente das matas"
            />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </>
  )
}
