import { useState } from 'react'
import { useForm } from 'react-hook-form'
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

export default function Card(props) {
  return (
    <Box borderRadius={5} textAlign='center' height='100%'>
      <Box padding={5} backgroundColor='#3a8355' color='white' borderTopRadius={5}>
        <Heading fontSize={20} textAlign='center'>{props.title}</Heading>
      </Box>
      <Box backgroundColor='#424242' color='white' borderBottomRadius={5} padding={10} height={220} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        {props.children}
      </Box>
    </Box>
  )
}
