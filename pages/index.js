import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import { Box, Heading, List, ListItem } from '@chakra-ui/react'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box fontSize='1.2rem' lineHeight={1.5} paddingTop={1}>
        <Heading fontSize='1.5rem' lineHeight={1.4} margin='1rem 0'>Dashboard</Heading>
        <List listStyleType='none' padding={0} margin={0}>
          <ListItem margin='0 0 1.25rem'>
            <Link href='/details'>
              <a>Details</a>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Layout>
  )
}
