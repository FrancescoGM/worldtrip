import React from 'react'
import Link from 'next/link'
import { Box, Image, Text } from '@chakra-ui/react'

interface SwiperItemProps {
  url: string
  navigateTo: string
  alt: string
  title: string
  subtitle: string
}

export const SwiperItem: React.FC<SwiperItemProps> = ({
  url,
  alt,
  navigateTo,
  title,
  subtitle
}) => {
  return (
    <Link passHref href={navigateTo}>
      <Box w="100%" h="100%" cursor="pointer">
        <Image w="100%" display="block" src={url} alt={alt} />
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="gray.50"
          fontSize="4xl"
          textAlign="center"
          fontWeight="bold"
        >
          {title}
          <br />
          <Text color="gray.100" fontSize="xl">
            {subtitle}
          </Text>
        </Text>
      </Box>
    </Link>
  )
}
