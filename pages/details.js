import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../components/layout'
import Head from 'next/head'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Select,
  Text,
  Textarea
} from '@chakra-ui/react'

export default function Details() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  return (
    <Layout>
      <Head>
        <title>Details</title>
      </Head>
      <Box padding='13px 27px 32px'>
        <Breadcrumb fontSize={16}>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='/details'>Details</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box maxWidth={1248} margin='auto' textAlign='center'>
          <Text fontSize={16} paddingTop={12}>If you change your email please inform us at: accounting@palomamodelandtalent.com. Thanks!</Text>
          <Box borderRadius={4} border='1px solid #d5dde6' marginTop={32}>
            <Box padding='7px 0' fontSize={17} backgroundColor='#cbd5e0' fontWeight='bold'>My Details</Box>
            <Box padding='40px 22px 28px' fontSize={16}>
              <Grid templateColumns='repeat(2, 1fr)'>
                <GridItem>
                  Stage Name:
                </GridItem>
                <GridItem>
                  Union Status: Non-Union
                </GridItem>
              </Grid>
              <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <Grid templateColumns='repeat(3, 1fr)' fontSize={16} padding='12px 6px 0' gap={3}>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input {...register('firstName')} placeholder='A' />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <Input {...register('lastName')} placeholder='BBBB' />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input {...register('email')} type='email' placeholder='email@here.com' />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>Gender</FormLabel>
                      <Select {...register('gender')}>
                        <option>Female</option>
                        <option>Male</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>Date of Birth</FormLabel>
                      <Input {...register('dateOfBirth')} type='date' defaultValue='2022-06-23' />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>Identical Twin</FormLabel>
                      <Select {...register('identicalTwin')}>
                        <option>Yes</option>
                        <option>No</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>Ethincity (actual)</FormLabel>
                      <Select {...register('actualEthincity')}>
                        <option>Caucasian</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel>Ethincity Notes</FormLabel>
                      <Textarea {...register('ethincityNotes')} rows={1} />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>Ethincity (looks like)</FormLabel>
                      <Select {...register('looksLikeEthincity')} multiple>
                        <option>Caucasian</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>Hair Color</FormLabel>
                      <Select {...register('hairColor')}>
                        <option>Auburn</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>Clothing Size</FormLabel>
                      <Select {...register('clothingSize')}>
                        <option>Newborn</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>Eye Color</FormLabel>
                      <Select {...register('eyeColor')}>
                        <option>Blue</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>Shoe Size</FormLabel>
                      <Select {...register('shoeSize')}>
                        <option>Toddler Size 2</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>Height</FormLabel>
                      <Select {...register('height')}>
                        <option>1' 1"</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>Weight</FormLabel>
                      <Select {...register('weight')}>
                        <option>7 lbs</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                </Grid>
                <Grid templateColumns='repeat(2, 1fr)' fontSize={16} padding='12px 6px 0' gap={3}>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>City Talent Lives In</FormLabel>
                      <Input {...register('cityTalentLivesIn')} placeholder='as' />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>State Talent Lives In</FormLabel>
                      <Input {...register('stateTalentLivesIn')} placeholder='new' />
                    </FormControl>
                  </GridItem>
                </Grid>
                <Grid templateColumns='repeat(3, 1fr)' fontSize={16} padding='12px 6px 0' gap={3}>
                  <GridItem>
                    <FormControl>
                      <FormLabel>Casting Frontier Barcode</FormLabel>
                      <Input {...register('castingFrontierBarcode')} />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel>Work Permit Expiration Date</FormLabel>
                      <Input {...register('workPermitExpirationDate')} />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel>SAG ID (only needed if member of SAG union)</FormLabel>
                      <Input {...register('sagID')} />
                    </FormControl>
                  </GridItem>
                </Grid>
                <Grid templateColumns='repeat(2, 1fr)' fontSize={16} padding='12px 6px 0' gap={3}>
                  <GridItem>
                    <FormControl>
                      <FormLabel>Requested Stage First Name</FormLabel>
                      <Input {...register('requestedStageFirstName')} />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel>Requested Stage Last Name</FormLabel>
                      <Input {...register('requestedStageLastName')} />
                    </FormControl>
                  </GridItem>
                </Grid>
                <Grid templateColumns='repeat(1, 1fr)' fontSize={16} padding='12px 6px 0' gap={3}>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>Is Homeschooled</FormLabel>
                      <Select {...register('isHomeschooled')}>
                        <option>Yes</option>
                        <option>No</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                </Grid>
                <Text padding='31px 0 0'>All links should be in URL form and to PUBLIC accounts; please do not add any links to private accounts.</Text>
                <Box padding='31px 38px 0'>
                  <FormControl>
                    <FormLabel>Facebook</FormLabel>
                    <Input {...register('facebook')} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>IMDBS</FormLabel>
                    <Input {...register('imdbs')} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Instagram</FormLabel>
                    <Input {...register('instagram')} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Personal Website</FormLabel>
                    <Input {...register('personalWebsite')} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Twitter</FormLabel>
                    <Input {...register('twitter')} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Youtube</FormLabel>
                    <Input {...register('youtube')} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Textarea {...register('message')} />
                  </FormControl>
                  <Box display='flex' justifyContent='center' paddingTop={28}>
                    <Button type='submit' margin='0 4px'>Save</Button>
                    <Button margin='0 4px'>Back</Button>
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
