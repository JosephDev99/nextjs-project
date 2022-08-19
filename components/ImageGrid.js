// ImageGrid.js

import DraggableList from 'react-draggable-lists'
import { Box } from '@chakra-ui/react'
// Rendering individual images
const Image = ({ image }) => {
  return (
    <Box marginY={4}>
      <img
        alt={`img - ${image.id}`}
        src={image.src}
        className="file-img"
      />
    </Box>
  );
};

// ImageList Component//
const ImageGride = ({ images }) => {
  // render each image by calling Image component
  const renderImage = (image, index) => {
    return <Image image={image} key={`${image.id}-image`} />;
  };
  // Return the list of files//
  return (
    <Box borderBottomRadius={6} backgroundColor='#424242' padding={4}>
      {/* <DraggableList> */}
      {images.map(renderImage)}
      {/* </DraggableList> */}
    </Box>
  );
};

export default ImageGride;