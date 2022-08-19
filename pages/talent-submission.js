import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../components/layout'
import Head from 'next/head'
import {
  Box,
  Button,
  Checkbox,
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
  Select,
  Text,
  Textarea,
  useDisclosure
} from '@chakra-ui/react'

export default function Details() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');
  const [flag, setFlag] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Layout>
      <Head>
        <title>Paloma Model and Talent</title>
      </Head>
      <Box padding='13px 27px 32px'>
        <Box margin='40px auto 10px' maxWidth={1440} paddingTop={20}>
        <Heading fontSize={27} textAlign='center' color='#222' marginBottom={50} marginTop={-10}>Talent Submission</Heading>
        {flag ?
          <>
            <Box margin='auto' textAlign='center'>
              <Box borderRadius={4} border='1px solid #d5dde6'>
                <Box padding='7px 0' fontSize={17} backgroundColor='#3c8251' color='white' fontWeight='bold'>Submission for Babies</Box>
                <Box padding='40px 22px 28px' fontSize={16} backgroundColor='#424242' color='white' textAlign='left'>
                  <Box display='flex'>
                    <Image
                      src="/images/panda.jpg"
                      alt='panda'
                      width={260}
                      marginRight={2}
                      marginBottom={1}
                    />
                    <Text color='white' fontSize={18}>
                      Thank you for considering Paloma Model & Talent for representation. We are thrilled to be running our own agency and have the opportunity to provide children and their parents with dedicated, responsive, considerate, experienced, and protective assistance in the entertainment industry. Paloma Model & Talent is family owned and operated. We are hard-working sisters (just ask our husbands) with unparalleled drive, creativity, intelligence, industry knowledge, confidence, passion, spirit and gumption. But enough about us...
                      <br/>
                      <br/>
                      Please submit recent outdoor pictures that are no more than a week old. If your child is older 6 months to 11 months, they must be sitting up in photos and if 12 months or older, standing. Please no photos with toys or food,
                    </Text>
                  </Box>
                  <Text color='white' fontSize={18}>
                    and nothing in high chairs, strollers, or car seats. Keep hair natural with no hair accessories like bows, headbands, or hats. Photos must reflect how they look currently. We would like to see at least one smiling shot, a non-expression shot and a full-length body shot. Photos must be under 2MB in size.
                    <br/>
                    <br/>
                    You will get an automated response back once the submission has been successful. We will get back to you within two weeks by email so please add submissions@palomamodelandtalent.com and info@palomamodelandtalent.com to your address book to ensure the emails do not end up in spam. Thank you again for visiting us and taking this next step in making dreams come true for us all.
                  </Text>
                </Box>
              </Box>
              <Box borderRadius={4} border='1px solid #d5dde6' marginTop={8}>
                <Box padding='7px 0' fontSize={17} backgroundColor='#3c8251' color='white' fontWeight='bold'>Talent Details</Box>
                <Box padding='40px 22px 28px' fontSize={16} backgroundColor='#424242' color='white'>
                  <Text padding='20px 100px'>
                    Please note we receive dozens of submissions every day. your patience with our review process is appreciated. We are constantly looking for new talent, but if you live outside of the Southern California area and are not a strong actor with credits and a reel, we are typically not able to offer representation at this time. Our adult department is focused on experienced actors at this time, not those looking solely for modeling work.
                  </Text>
                  <form onSubmit={handleSubmit((data) => {
                    setData(JSON.stringify(data))
                    onOpen()
                  })}>
                    <Grid templateColumns='repeat(4, 1fr)' fontSize={16} padding='12px 6px 0' gap={3}>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Input variant='flushed' {...register('firstName')} placeholder='First Name' />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Input variant='flushed' {...register('lastName')} placeholder='Last Name' />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Input variant='flushed' {...register('parentFirstName')} placeholder='Parent First Name' />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Input variant='flushed' {...register('parentLastName')} placeholder='Parent Last Name' />
                        </FormControl>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <FormControl isRequired padding='8px 0'>
                          <Select variant='flushed' {...register('gender')}>
                            <option>Female</option>
                            <option>Male</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <FormControl isRequired padding='8px 0'>
                          <Select variant='flushed' {...register('identicalTwin')}>
                            <option>Yes</option>
                            <option>No</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Select variant='flushed' {...register('actualEthincity')}>
                            <option>Caucasian</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Select variant='flushed' {...register('looksLikeEthincity')}>
                            <option>Caucasian</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl>
                          <Textarea variant='flushed' {...register('ethincityNotes')} rows={1} />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Input variant='flushed' {...register('dateOfBirth')} type='date' defaultValue='2022-06-23' />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Select variant='flushed' {...register('eyeColor')}>
                            <option>Blue</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Select variant='flushed' {...register('hairColor')}>
                            <option>Auburn</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Select variant='flushed' {...register('clothingSize')}>
                            <option>Newborn</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Select variant='flushed' {...register('shoeSize')}>
                            <option>Toddler Size 2</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Select variant='flushed' {...register('height')}>
                            <option>1' 1"</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Select variant='flushed' {...register('weight')}>
                            <option>7 lbs</option>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Input variant='flushed' {...register('cellPhone')} placeholder='Cell Phone #' />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Input variant='flushed' {...register('secondaryPhone')} placeholder='Secondary Phone' />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Input variant='flushed' {...register('email')} placeholder='Email' type='email' />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Input variant='flushed' {...register('confirmEmail')} placeholder='Confirm Email' type='email' />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Input variant='flushed' {...register('stateTalentLivesIn')} placeholder='State Talent Lives In' />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl isRequired padding='8px 0'>
                          <Input variant='flushed' {...register('cityTalentLivesIn')} placeholder='City Talent Lives In' />
                        </FormControl>
                      </GridItem>
                    </Grid>
                    <Grid templateColumns='repeat(2, 1fr)' fontSize={16} padding='12px 6px 0' gap={3}>
                      <GridItem>
                        <Text padding='31px 76px 0'>All links should be in URL form and to PUBLIC accounts; please do not add any links to private accounts.</Text>
                        <Box padding='31px 38px 0'>
                          <FormControl>
                            <FormLabel textAlign='center'>Facebook</FormLabel>
                            <Input variant='flushed' {...register('facebook')} />
                          </FormControl>
                          <FormControl>
                            <FormLabel textAlign='center'>IMDBS</FormLabel>
                            <Input variant='flushed' {...register('imdbs')} />
                          </FormControl>
                          <FormControl>
                            <FormLabel textAlign='center'>Instagram</FormLabel>
                            <Input variant='flushed' {...register('instagram')} />
                          </FormControl>
                          <FormControl>
                            <FormLabel textAlign='center'>Personal Website</FormLabel>
                            <Input variant='flushed' {...register('personalWebsite')} />
                          </FormControl>
                          <FormControl>
                            <FormLabel textAlign='center'>Twitter</FormLabel>
                            <Input variant='flushed' {...register('twitter')} />
                          </FormControl>
                          <FormControl>
                            <FormLabel textAlign='center'>Youtube</FormLabel>
                            <Input variant='flushed' {...register('youtube')} />
                          </FormControl>
                        </Box>
                      </GridItem>
                      <GridItem padding='22px 40px 0'>
                        <FormControl isRequired>
                          <Select variant='flushed' {...register('isHomeschooled')}>
                            <option>Yes</option>
                            <option>No</option>
                          </Select>
                        </FormControl>
                        <Text textAlign='center' marginTop={63}>
                          Are you or your child currently represented by any other agency or manager? If so, please list them and the respective division (all, theatrical, commercial, Etc):
                        </Text>
                        <FormControl margin='16px 0'>
                          <Input variant='flushed' {...register('agencyOrManager')} placeholder='Agency or Manager' />
                        </FormControl>
                        <FormControl>
                          <Textarea variant='flushed' {...register('message')} placeholder='Message' />
                        </FormControl>
                      </GridItem>
                    </Grid>
                    <FormControl margin='16px 0'>
                      <Input variant='flushed' {...register('desiredUsername')} placeholder='Desired username' />
                    </FormControl>
                    <FormControl margin='16px 0'>
                      <Input variant='flushed' {...register('password')} placeholder='Password' type='password' />
                    </FormControl>
                    <FormControl margin='16px 0'>
                      <Input variant='flushed' {...register('confirmPassword')} placeholder='Confirm Password' type='password' />
                    </FormControl>
                    <Box display='flex' justifyContent='center'>
                      <Button type='submit' margin='0 4px' backgroundColor='#3c8251'>Continue</Button>
                      <Button margin='0 4px' backgroundColor='#f44336'>Cancel</Button>
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
          </> :
            <Box maxWidth={600} margin='auto' boxShadow='0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%)' padding='dark' borderRadius={4}>
              <Box marginTop={0} backgroundColor='#3c8251' textAlign='center' borderTopLeftRadius={5} borderTopRightRadius={5} marginBottom={0}>
                <Heading color='white' fontSize={22} fontWeight={700} textAlign='center' padding='15px 0'>
                  Select an Age Group
                </Heading>
                <Box marginBottom={0} padding={10} display='block' fontSize={14} color='white' backgroundColor='#424242'>
                  <Grid templateColumns='repeat(2, 1fr)' gap={3}>
                    <GridItem>
                      <Button width='100%' height={100} fontSize={22} backgroundColor='#3c8251' onClick={() => setFlag(true)}>Babies (1 - 3)</Button>
                    </GridItem>
                    <GridItem>
                      <Button width='100%' height={100} fontSize={22} backgroundColor='#3c8251' onClick={() => setFlag(true)}>Kids (4 - 12)</Button>
                    </GridItem>
                  </Grid>
                  <br/>
                  <Grid templateColumns='repeat(2, 1fr)' gap={3}>
                    <GridItem>
                      <Button width='100%' height={100} fontSize={22} backgroundColor='#3c8251' onClick={() => setFlag(true)}>Teens (13 - 17)</Button>
                    </GridItem>
                    <GridItem>
                      <Button width='100%' height={100} fontSize={22} backgroundColor='#3c8251' onClick={() => setFlag(true)}>Young Adults (18+)</Button>
                    </GridItem>
                  </Grid>
                </Box>
              </Box>
            </Box>
        }
        </Box>
      </Box>
    </Layout>
  )
}
