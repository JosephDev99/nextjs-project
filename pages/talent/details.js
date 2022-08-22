import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../../components/layout'
import Head from 'next/head'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightAddon,
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
import { CalendarIcon, ChevronUpIcon, ChevronDownIcon, DeleteIcon, EditIcon, EmailIcon, ExternalLinkIcon, InfoIcon, QuestionIcon, UpDownIcon } from '@chakra-ui/icons'

export default function Details() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Layout>
      <Head>
        <title>Paloma Model and Talent</title>
      </Head>
      <Box padding='13px 27px 32px'>
        <Box margin='40px auto 10px' maxWidth={1440} paddingTop={20}>
          <Box margin='auto'>
            <Box borderRadius={4} border='1px solid #d5dde6' marginTop={8}>
              <Box padding='7px 0' fontSize={17} backgroundColor='#3c8251' color='white' fontWeight='bold' textAlign='center'>George O <span style={{color: 'orange'}}>(New)</span>, 0 Months</Box>
              <Box padding='12px 22px 28px' fontSize={16} backgroundColor='#424242' color='white'>
                <Box display='flex' alignItems='center'>
                  <Button backgroundColor='#3a8355'><EditIcon />Edit Photos</Button>
                  <Text>No photos.</Text>
                </Box>
                <form onSubmit={handleSubmit((data) => {
                  setData(JSON.stringify(data))
                  onOpen()
                })}>
                  <Grid templateColumns='repeat(4, 1fr)' fontSize={16} padding='12px 6px 0' gap={3}>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Stage First Name</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('stageFirstName')} placeholder='Stage First Name' defaultValue='George' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Stage Last Name</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('stageLastName')} placeholder='Stage Last Name' defaultValue='O' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Gender</FormLabel>
                        <Select variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('gender')} defaultValue='male'>
                          <option value='female'>Female</option>
                          <option value='male'>Male</option>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Eye Color</FormLabel>
                        <Select variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('eyeColor')} defaultValue='hazel'>
                          <option value='hazel'>Hazel</option>
                          <option value='blue'>Blue</option>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Hair Color</FormLabel>
                        <Select variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('hairColor')} defaultValue='auburn'>
                          <option value='blonde'>Blonde</option>
                          <option value='auburn'>Auburn</option>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Height</FormLabel>
                        <Select variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('height')} defaultValue='1-2'>
                          <option value='1-1'>1' 1"</option>
                          <option value='1-2'>1' 2"</option>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Weight</FormLabel>
                        <Select variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('weight')} defaultValue='8'>
                          <option value='7'>7 lbs.</option>
                          <option value='8'>8 lbs.</option>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Clothing Size</FormLabel>
                        <Select variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('clothingSize')} defaultValue='8-10'>
                          <option value='0-0'>Newborn</option>
                          <option value='8-10'>8-10</option>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Shoe Size</FormLabel>
                        <Select variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('shoeSize')} defaultValue='3'>
                          <option value='2'>Toddler Size 2</option>
                          <option value='3'>Toddler Size 3</option>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <Select variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('bodyType')} defaultValue='0'>
                          <option value='0' disabled>Body Type</option>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Is Homeschooled</FormLabel>
                        <Select variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('isHomeschooled')} defaultValue='no'>
                          <option value='yes'>Yes</option>
                          <option value='no'>No</option>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Ethinicity (Actual)</FormLabel>
                        <Select variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('actualEthincity')} defaultValue='middle-eastern'>
                          <option value='caucasian'>Caucasian</option>
                          <option value='middle-eastern'>Middle Eastern</option>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem colSpan={4}>
                      <FormControl>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('ethincityNotes')} placeholder='Ethnicity Notes' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>First Name</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('firstName')} placeholder='First Name' defaultValue='George' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Last Name</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('lastName')} placeholder='Last Name' defaultValue='O' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Email</FormLabel>
                        <InputGroup>
                          <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('email')} placeholder='Email' type='email' defaultValue='email@test.com' />
                          <InputRightAddon backgroundColor='transparent' borderColor='transparent'><EmailIcon /></InputRightAddon>
                        </InputGroup>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Date of Birth</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('dateOfBirth')} type='date' defaultValue='2022-07-31' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Is Twin</FormLabel>
                        <Select variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('isTwin')}>
                          <option>Yes</option>
                          <option>No</option>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Submitted</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('submitted')} type='date' defaultValue='2022-07-30' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Accepted</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('accepted')} type='date' placeholder='Accepted' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Profile Last Updated</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('profileLastUpdated')} type='date' placeholder='Profile Last Updated' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Contract Expiration Date</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('contractExpirationDate')} type='date' placeholder='Contract Expiration Date' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Work Permit Expiration Date</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('workPermitExpirationDate')} type='date' placeholder='Work Permit Expiration Date' />
                      </FormControl>
                    </GridItem>
                    <GridItem colSpan={4}>
                      <FormControl>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <Textarea variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('adminNotes')} placeholder='Admin Notes' backgroundColor='#555555' rows={5} />
                      </FormControl>
                    </GridItem>
                  </Grid>
                  <Grid templateColumns='repeat(7, 1fr)' fontSize={16} padding='12px 6px 0' gap={3}>
                    <GridItem>
                      <Checkbox>LAC</Checkbox>
                    </GridItem>
                    <GridItem>
                      <Checkbox>AA</Checkbox>
                    </GridItem>
                    <GridItem>
                      <Checkbox>CF</Checkbox>
                    </GridItem>
                    <GridItem>
                      <Checkbox>W9</Checkbox>
                    </GridItem>
                    <GridItem>
                      <Checkbox>CA</Checkbox>
                    </GridItem>
                    <GridItem>
                      <Checkbox>WP</Checkbox>
                    </GridItem>
                    <GridItem>
                      <Checkbox>ND</Checkbox>
                    </GridItem>
                  </Grid>
                  <Text padding='0 0 0 6px'>Bookouts<br />This talent has no bookouts</Text>
                  <Text padding='0 0 0 6px'>Contacts<br />This talent has no contacts</Text>
                  <Grid templateColumns='repeat(4, 1fr)' fontSize={16} padding='12px 6px 0' gap={3}>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('castingFrontierBarcode')} placeholder='Casting Frontier Barcode' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('sagAftraId')} placeholder='SAG-AFTRA ID' />
                      </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}></GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('streetAddress')} placeholder='Street Address' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('city')} placeholder='City' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('zipcode')} placeholder='Zipcode' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('state')} placeholder='State' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>Cell(1)</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('cell1')} placeholder='Cell(1)' defaultValue='(129) 192-9391' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('cell2')} placeholder='Cell(2)' />
                      </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}></GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('alsoRepresentedBy')} placeholder='Also Represented By' />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl padding='0 0 8px'>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <Textarea variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('message')} placeholder='Message' />
                      </FormControl>
                    </GridItem>
                  </Grid>
                  <Grid templateColumns='repeat(3, 1fr)' fontSize={16} padding='12px 6px 0' gap={3}>
                    <GridItem>
                      <FormControl>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <InputGroup>
                          <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('facebook')} placeholder='Facebook' />
                          <InputRightAddon backgroundColor='transparent' borderColor='transparent'><ExternalLinkIcon /></InputRightAddon>
                        </InputGroup>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <InputGroup>
                          <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('imdbs')} placeholder='IMDBS' />
                          <InputRightAddon backgroundColor='transparent' borderColor='transparent'><ExternalLinkIcon /></InputRightAddon>
                        </InputGroup>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <InputGroup>
                          <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('instagram')} placeholder='Instagram' />
                          <InputRightAddon backgroundColor='transparent' borderColor='transparent'><ExternalLinkIcon /></InputRightAddon>
                        </InputGroup>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <InputGroup>
                          <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('personalWebsite')} placeholder='Personal Website' />
                          <InputRightAddon backgroundColor='transparent' borderColor='transparent'><ExternalLinkIcon /></InputRightAddon>
                        </InputGroup>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <InputGroup>
                          <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('twitter')} placeholder='Twitter' />
                          <InputRightAddon backgroundColor='transparent' borderColor='transparent'><ExternalLinkIcon /></InputRightAddon>
                        </InputGroup>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl>
                        <FormLabel margin={0} fontSize={12} color='lightblue'>&nbsp;</FormLabel>
                        <InputGroup>
                          <Input variant='flushed' borderBottomColor='lightblue' borderBottomWidth={2} _placeholder={{ color: 'lightblue' }} {...register('youtube')} placeholder='Youtube' />
                          <InputRightAddon backgroundColor='transparent' borderColor='transparent'><ExternalLinkIcon /></InputRightAddon>
                        </InputGroup>
                      </FormControl>
                    </GridItem>
                  </Grid>
                  <Box display='flex' justifyContent='space-between' paddingTop={10}>
                    <Box display='flex' color='black'>
                      <Button type='submit' margin='0 4px' backgroundColor='#8fee98'><CalendarIcon />Save</Button>
                      <Button margin='0 4px' backgroundColor='#ffbecb'><DeleteIcon />Delete</Button>
                    </Box>
                    <Box display='flex'>
                      <Button type='submit' margin='0 4px' backgroundColor='#3a8355'><ChevronUpIcon />Accept</Button>
                      <Button margin='0 4px' backgroundColor='#f92b3a'><ChevronDownIcon />Decline</Button>
                      <Button margin='0 4px' backgroundColor='#424242' border='1px solid #373737'><UpDownIcon />Long Term Pending</Button>
                      <Button margin='0 4px' backgroundColor='#f92b3a'><QuestionIcon />Make Inactive</Button>
                      <Button margin='0 4px' backgroundColor='#3a8355'><InfoIcon />Make Live</Button>
                    </Box>
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
        </Box>
      </Box>
    </Layout>
  )
}
