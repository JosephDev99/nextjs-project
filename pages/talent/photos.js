import { useCallback, useState } from 'react'
import cuid from 'cuid'
import Head from 'next/head'
import Dropzone from '../../components/Dropzone'
import ImageGrid from '../../components/ImageGrid'
import Layout from '../../components/layout'
import Link from 'next/link'
import { Box, Button, Grid, GridItem, Heading, Text } from '@chakra-ui/react'

export default function Photos() {
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const onDragEnd = (result) => {
    const newImages = Array.from(images);
    const [removed] = newImages.splice(result.source.index, 1);
    if (result.destination) {
      newImages.splice(result.destination.index, 0, removed);
    }
    setImages(newImages);
  }

  return (
    <Layout>
      <Head>
        <title>Talent photos</title>
      </Head>
      <Box fontSize='1.2rem' lineHeight={1.5} paddingTop={1} maxWidth={1500} margin='auto'>
        <Text color='red' textAlign='center' paddingTop={51} paddingBottom={37} fontSize={21}>You will need to have at least one photo uploaded for your profile to be reviewed.</Text>
        <Grid templateColumns='repeat(2, 1fr)' fontSize={16} padding='12px 6px 0'>
          <GridItem>
            <Box borderRadius={6} maxWidth={251} margin='auto'>
              <Box borderTopRadius={6} backgroundColor='#3c8251' color='white' textAlign='center' paddingY={3}>
                <Heading fontSize={20} fontWeight='normal'>My Photos</Heading>
                <Text fontSize={17}>Drag Photos to Re-Order</Text>
              </Box>
              <ImageGrid images={images} onDragEnd={onDragEnd} />
            </Box>
          </GridItem>
          <GridItem display='flex' flexDirection='column' alignItems='flex-end'>
            <Button backgroundColor='#3c8251' color='white' fontSize={15} marginRight={6}>
              <Link href='/profile'>
                <a>Back To Profile</a>
              </Link>
            </Button>
            <Dropzone onDrop={onDrop} accept={"image/*"} />
          </GridItem>
        </Grid>
      </Box>
    </Layout>
  )
}
