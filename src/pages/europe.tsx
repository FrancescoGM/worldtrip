import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'

const EuropePage: NextPage = () => {
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
      ></Flex>
    </>
  )
}

export default EuropePage
