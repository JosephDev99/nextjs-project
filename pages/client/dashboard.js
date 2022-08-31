import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../../components/layout'
import Head from 'next/head'
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  Text,
  Textarea,
  Tooltip,
  useDisclosure
} from '@chakra-ui/react'
import { CloseIcon, SearchIcon } from '@chakra-ui/icons'

export default function Dashboard() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');
  const [flag, setFlag] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Layout>
      <Head>
        <title>Paloma Model and Talent</title>
      </Head>
      <Box padding='13px 27px 32px' maxWidth={1440} margin='auto'>
        <Grid templateColumns='repeat(2, 1fr)' gap={3}>
          <GridItem>
            <Box margin='auto' textAlign='center'>
              <Box borderRadius={4} border='1px solid #d5dde6' marginTop={8}>
                <Box padding='7px 0' fontSize={17} backgroundColor='#3c8251' color='white' fontWeight='bold'>Conduct New Talent Search</Box>
                <Box padding='40px 22px 28px' fontSize={16} backgroundColor='#424242' color='white'>
                  <form onSubmit={handleSubmit((data) => {
                    setData(JSON.stringify(data))
                    onOpen()
                  })}>
                    <Grid templateColumns='repeat(2, 1fr)' fontSize={16} padding='12px 6px 0' gap={3}>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Input variant='flushed' {...register('firstName')} placeholder='First Name' />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Input variant='flushed' {...register('lastName')} placeholder='Last Name' />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Select variant='flushed' {...register('gender')} defaultValue=''>
                            <option disabled value=''>Gender</option>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Trans Female</option>
                            <option>Trans Male</option>
                            <option>Other</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Select variant='flushed' {...register('identicalTwin')} defaultValue=''>
                            <option disabled value=''>Is An Identical/Nearly Identical Twin or Multiple</option>
                            <option>Yes</option>
                            <option>No</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Select variant='flushed' {...register('ethnicity')} defaultValue=''>
                            <option disabled value=''>Ethnicity</option>
                            <option>Caucasian</option>
                            <option>Middle Eastern</option>
                            <option>Asian</option>
                            <option>Ethnically Ambiguous</option>
                            <option>African American</option>
                            <option>Hispanic</option>
                            <option>East-Indian</option>
                            <option>Pacific Islander</option>
                            <option>Native American</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Select variant='flushed' {...register('eyeColor')} defaultValue=''>
                            <option disabled value=''>Eye Color</option>
                            <option>Blue</option>
                            <option>Brown</option>
                            <option>Green</option>
                            <option>Hazel</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Select variant='flushed' {...register('hairColor')} defaultValue=''>
                            <option disabled value=''>Hair Color</option>
                            <option>Auburn</option>
                            <option>Black</option>
                            <option>Blonde</option>
                            <option>Brown</option>
                            <option>Red</option>
                            <option>Bald</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Select variant='flushed' {...register('clothingSize')} defaultValue=''>
                            <option disabled value=''>Clothing Size</option>
                            <option>Newborn</option>
                            <option>0-3 Months</option>
                            <option>3-6 Months</option>
                            <option>6-9 Months</option>
                            <option>9-12 Months</option>
                            <option>12-18 Months</option>
                            <option>18-24 Months</option>
                            <option>2T</option>
                            <option>3T</option>
                            <option>4T</option>
                            <option>5T</option>
                            <option>6</option>
                            <option>7-8</option>
                            <option>8-10</option>
                            <option>10-12</option>
                            <option>12-14</option>
                            <option>14-16</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                            <option>XXXL</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Select variant='flushed' {...register('shoeSize')} defaultValue=''>
                            <option disabled value=''>Shoe Size</option>
                            <option>Toddler Size 2</option>
                            <option>Toddler Size 3</option>
                            <option>Toddler Size 4</option>
                            <option>Toddler Size 5</option>
                            <option>Toddler Size 6</option>
                            <option>Toddler Size 7</option>
                            <option>Toddler Size 8</option>
                            <option>Toddler Size 9</option>
                            <option>Kids Size 10</option>
                            <option>Kids Size 11</option>
                            <option>Kids Size 12</option>
                            <option>Kids Size 13</option>
                            <option>Kids Size 1</option>
                            <option>Kids Size 2</option>
                            <option>Kids Size 3</option>
                            <option>Kids Size 4</option>
                            <option>Kids Size 5</option>
                            <option>Kids Size 6</option>
                            <option>Adult Size 7</option>
                            <option>Adult Size 8</option>
                            <option>Adult Size 9</option>
                            <option>Adult Size 10</option>
                            <option>Adult Size 11</option>
                            <option>Adult Size 12</option>
                            <option>Adult Size 13</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Select variant='flushed' {...register('area')} defaultValue=''>
                            <option disabled value=''>Area</option>
                            <option>Los Angeles County</option>
                            <option>Orange County</option>
                            <option>San Diego County</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Select variant='flushed' {...register('jobType')} defaultValue=''>
                            <option disabled value=''>Job Type</option>
                            <option>Theatrical</option>
                            <option>Print</option>
                            <option>Commercial</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <Tooltip label='select SAG-E and Non-Union for all non-union talent'>
                          <FormControl padding='8px 0'>
                            <Select variant='flushed' {...register('unionStatus')} defaultValue=''>
                              <option disabled value=''>Union Status</option>
                              <option>Non-Union</option>
                              <option>SAG-E</option>
                              <option>SAG</option>
                            </Select>
                          </FormControl>
                        </Tooltip>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <Text>Age</Text>
                      </GridItem>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Select variant='flushed' {...register('fromAge')} defaultValue=''>
                            <option disabled value=''>From</option>
                            {Array.from(Array(36), (e, i) => {
                              return <option key={i}>{`${i} Month${i !== 1 ? 's' : ''}`}</option>
                            })}
                            {Array.from(Array(97), (e, i) => {
                              return <option key={i}>{`${i + 3} Years`}</option>
                            })}
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Select variant='flushed' {...register('toAge')} defaultValue=''>
                            <option disabled value=''>To</option>
                            {Array.from(Array(36), (e, i) => {
                              return <option key={i}>{`${i} Month${i !== 1 ? 's' : ''}`}</option>
                            })}
                            {Array.from(Array(97), (e, i) => {
                              return <option key={i}>{`${i + 3} Years`}</option>
                            })}
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <Text>Weight Range</Text>
                      </GridItem>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Select variant='flushed' {...register('fromWeight')} defaultValue=''>
                            <option disabled value=''>From</option>
                            {Array.from(Array(244), (e, i) => {
                              return <option key={i}>{`${i + 7} lbs.`}</option>
                            })}
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Select variant='flushed' {...register('toWeight')} defaultValue=''>
                            <option disabled value=''>To</option>
                            {Array.from(Array(244), (e, i) => {
                              return <option key={i}>{`${i + 7} lbs.`}</option>
                            })}
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <Text>Height Range</Text>
                      </GridItem>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Select variant='flushed' {...register('fromWeight')} defaultValue=''>
                            <option disabled value=''>From</option>
                            {Array.from(Array(71), (e, i) => {
                              return <option key={i}>{`${parseInt((i + 13) / 12)}' ${(i + 1) % 12}"`}</option>
                            })}
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl padding='8px 0'>
                          <Select variant='flushed' {...register('toWeight')} defaultValue=''>
                            <option disabled value=''>To</option>
                            {Array.from(Array(244), (e, i) => {
                              return <option key={i}>{`${i + 7} lbs.`}</option>
                            })}
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <FormControl padding='8px 0'>
                          <Select variant='flushed' {...register('bodyType')} defaultValue=''>
                            <option disabled value=''>Body Type</option>
                            <option>Thin</option>
                            <option>Average</option>
                            <option>Husky</option>
                            <option>Special</option>
                            <option>Influencer</option>
                            <option>Category A</option>
                            <option>Category B</option>
                            <option>Category C</option>
                            <option>Category D</option>
                            <option>Category E</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                    </Grid>
                    <Box display='flex' justifyContent='flex-end'>
                      <Button type='submit' margin='0 4px' backgroundColor='#424242'>
                        <CloseIcon />&nbsp;
                        Clear
                      </Button>
                      <Button margin='0 4px' backgroundColor='#3c8251'>
                        <SearchIcon />&nbsp;
                        Search
                      </Button>
                    </Box>
                  </form>
                  <Modal isOpen={isOpen} onClose={onClose} size='6xl'>
                    <ModalOverlay />
                    <ModalContent backgroundColor='#424242' color='white'>
                      <ModalHeader backgroundColor='#3a8355' borderTopRightRadius={6} borderTopLeftRadius={6} textAlign='center'>Submit Talent</ModalHeader>
                      <ModalBody>
                        <Text paddingTop={7} paddingLeft={2} paddingRight={2}>
                          By checking this box you signify that you have answered these questions honestly. By submitting, you are confirming that your child (or you if over 18) has a valid Social Security number and can work legally in the United States unless your child is a newborn and a social is in process. Please add submissions@palomamodelandtalent.com to your address book or safe sender list to ensure email delivery. Please also check your spam or junk if you do not hear from us in a reasonable period of time.
                        </Text>
                        <Checkbox colorScheme='green' defaultChecked width='100%' justifyContent='center'>I agree to the terms</Checkbox>
                      </ModalBody>

                      <ModalFooter justifyContent='center'>
                        <Button backgroundColor='#3a8355' mr={1}>
                          Submit
                        </Button>
                        <Button backgroundColor='#f92b3a' onClick={onClose}>
                          Back
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Box>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            &nbsp;
          </GridItem>
        </Grid>
      </Box>
    </Layout>
  )
}
