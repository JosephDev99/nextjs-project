import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import { Box, Heading, Icon, Image } from '@chakra-ui/react'
import { FaUser } from 'react-icons/fa'

const name = 'Next JS'
export const siteTitle = 'Next JS project'

export default function Layout({ children, home }) {
  return (
    <Box margin='0 auto 6rem'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Box display='flex' flexDirection='column' alignItems='center' backgroundColor='#3c8251'>
        {home ? (
          <>
            <Image
              src="/images/profile.jpg"
              borderRadius={9999}
              height={144}
              width={144}
              alt={name}
            />
            <Heading fontSize='2.5rem' lineHeight={1.2} fontWeight={800} letterSpacing='-.05rem' margin='1rem 0'>{name}</Heading>
          </>
        ) : (
          <>
            <Box padding='9px 35px 8px 20px' display='flex' width='100%' justifyContent='space-between' alignItems='center'>
              <Heading fontSize={26} fontWeight={700} color='white'>Paloma Model & Talent</Heading>
              <Icon as={FaUser} color='white' />
            </Box>
          </>
        )}
      </Box>
      <main>{children}</main>
    </Box>
  )
}
