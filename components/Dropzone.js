// Dropzone.js

import { Box, Text } from '@chakra-ui/react'
import { useDropzone } from "react-dropzone";

function Dropzone({ onDrop, accept, open }) {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept,
      onDrop,
    });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Box {...getRootProps({ className: "dropzone" })} height={500} marginTop={2} width='full' border='5px dashed #706f6f' borderRadius={8} display='flex' flexDirection='column' justifyContent='center' textAlign='center'>
      <input className="input-zone" {...getInputProps()} />
      <Text color='grey' fontSize={21} lineHeight='20px' fontWeight='bold'>Drag and drop your file<br />or<br /><span style={{ cursor: 'pointer' }}>click to find it in your computer</span></Text>
      <Text color='grey' fontSize={15} marginTop={16}>Photos must be in PNG or JPG format and less than 2MB in size</Text>
    </Box>
  );
}

export default Dropzone;