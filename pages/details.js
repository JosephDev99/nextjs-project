import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../components/layout'
import Head from 'next/head'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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
import styles from './details.module.css'

export default function Details() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  return (
    <Layout>
      <Head>
        <title>Details</title>
      </Head>
      <div className={styles.container}>
        <Breadcrumb className={styles.breadcrumb}>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='/details'>Details</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className={`${styles.detailsContainer} text-center`}>
          <Text className={styles.detailsDescription}>If you change your email please inform us at: accounting@palomamodelandtalent.com. Thanks!</Text>
          <div className={styles.card}>
            <div className={`${styles.cardHeader} font-weight-bold`}>My Details</div>
            <div className={styles.cardBody}>
              <Grid templateColumns='repeat(2, 1fr)'>
                <GridItem w='100%'>
                  Stage Name:
                </GridItem>
                <GridItem w='100%'>
                  Union Status: Non-Union
                </GridItem>
              </Grid>
              <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <Grid templateColumns='repeat(3, 1fr)' className={styles.formGrid} gap={3}>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input {...register('firstName')} placeholder='A' />
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <Input {...register('lastName')} placeholder='BBBB' />
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input {...register('email')} type='email' placeholder='email@here.com' />
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>Gender</FormLabel>
                      <Select {...register('gender')}>
                        <option>Female</option>
                        <option>Male</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>Date of Birth</FormLabel>
                      <Input {...register('dateOfBirth')} type='date' defaultValue='2022-06-23' />
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>Identical Twin</FormLabel>
                      <Select {...register('identicalTwin')}>
                        <option>Yes</option>
                        <option>No</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>Ethincity (actual)</FormLabel>
                      <Select {...register('actualEthincity')}>
                        <option>Caucasian</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl>
                      <FormLabel>Ethincity Notes</FormLabel>
                      <Textarea {...register('ethincityNotes')} rows={1} />
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>Ethincity (looks like)</FormLabel>
                      <Select {...register('looksLikeEthincity')} multiple>
                        <option>Caucasian</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>Hair Color</FormLabel>
                      <Select {...register('hairColor')}>
                        <option>Auburn</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>Clothing Size</FormLabel>
                      <Select {...register('clothingSize')}>
                        <option>Newborn</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>Eye Color</FormLabel>
                      <Select {...register('eyeColor')}>
                        <option>Blue</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>Shoe Size</FormLabel>
                      <Select {...register('shoeSize')}>
                        <option>Toddler Size 2</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>Height</FormLabel>
                      <Select {...register('height')}>
                        <option>1' 1"</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>Weight</FormLabel>
                      <Select {...register('weight')}>
                        <option>7 lbs</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                </Grid>
                <Grid templateColumns='repeat(2, 1fr)' className={styles.formGrid} gap={3}>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>City Talent Lives In</FormLabel>
                      <Input {...register('cityTalentLivesIn')} placeholder='as' />
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>State Talent Lives In</FormLabel>
                      <Input {...register('stateTalentLivesIn')} placeholder='new' />
                    </FormControl>
                  </GridItem>
                </Grid>
                <Grid templateColumns='repeat(3, 1fr)' className={styles.formGrid} gap={3}>
                  <GridItem w='100%'>
                    <FormControl>
                      <FormLabel>Casting Frontier Barcode</FormLabel>
                      <Input {...register('castingFrontierBarcode')} />
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl>
                      <FormLabel>Work Permit Expiration Date</FormLabel>
                      <Input {...register('workPermitExpirationDate')} />
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl>
                      <FormLabel>SAG ID (only needed if member of SAG union)</FormLabel>
                      <Input {...register('sagID')} />
                    </FormControl>
                  </GridItem>
                </Grid>
                <Grid templateColumns='repeat(2, 1fr)' className={styles.formGrid} gap={3}>
                  <GridItem w='100%'>
                    <FormControl>
                      <FormLabel>Requested Stage First Name</FormLabel>
                      <Input {...register('requestedStageFirstName')} />
                    </FormControl>
                  </GridItem>
                  <GridItem w='100%'>
                    <FormControl>
                      <FormLabel>Requested Stage Last Name</FormLabel>
                      <Input {...register('requestedStageLastName')} />
                    </FormControl>
                  </GridItem>
                </Grid>
                <Grid templateColumns='repeat(1, 1fr)' className={styles.formGrid} gap={3}>
                  <GridItem w='100%'>
                    <FormControl isRequired>
                      <FormLabel>Is Homeschooled</FormLabel>
                      <Select {...register('isHomeschooled')}>
                        <option>Yes</option>
                        <option>No</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                </Grid>
                <Text className={styles.socialDescription}>All links should be in URL form and to PUBLIC accounts; please do not add any links to private accounts.</Text>
                <div className={styles.socialContainer}>
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
                  <div className='d-flex justify-content-center pt-28'>
                    <Button type='submit' className='mx-4'>Save</Button>
                    <Button className='mx-4'>Back</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
