import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../components/layout'
import Head from 'next/head'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Select,
  Text,
  Textarea
} from '@chakra-ui/react'
import { WarningTwoIcon, CalendarIcon, ChatIcon, CopyIcon, MoonIcon, StarIcon } from '@chakra-ui/icons'

import Card from '../components/card'

export default function Dashboard() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');
  const [flag, setFlag] = useState(false);

  return (
    <Layout>
      <Head>
        <title>Paloma Model and Talent</title>
      </Head>
      <Box padding='13px 27px 32px' maxWidth={1440} margin='auto'>
        <Box margin='40px auto 10px' maxWidth={1440} paddingTop={20}>
          <Heading fontSize={27} textAlign='center' color='#222' marginBottom={50} marginTop={-10} fontWeight='normal'>George O</Heading>
        </Box>
        <Grid templateColumns='repeat(3, 1fr)' gap={3}>
          <GridItem>
            <Card title='My Photos'>
              <WarningTwoIcon w={20} h={20} color='yellow' width='100%' />
              <Text paddingTop={3}>You will need to have at least one photo uploaded for your profile to be reviewed.</Text>
            </Card>
          </GridItem>
          <GridItem>
            <Card title='My Details'>
              <ChatIcon w={20} h={20} color='grey' width='100%' />
            </Card>
          </GridItem>
          <GridItem>
            <Card title='Resume'>
              <CopyIcon w={20} h={20} color='grey' width='100%' />
            </Card>
          </GridItem>
          <GridItem>
            <Card title='Book-Out Dates'>
              <CalendarIcon w={20} h={20} color='grey' width='100%' />
            </Card>
          </GridItem>
          <GridItem>
            <Card title='My Address'>
              <MoonIcon w={20} h={20} color='grey' width='100%' />
            </Card>
          </GridItem>
          <GridItem>
            <Card title='My Contacts'>
              <StarIcon w={20} h={20} color='grey' width='100%' />
            </Card>
          </GridItem>
        </Grid>
      </Box>
    </Layout>
  )
}
