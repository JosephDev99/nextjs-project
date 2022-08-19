// ImageGrid.js

// import DraggableList from 'react-draggable-lists'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box } from '@chakra-ui/react'
// Rendering individual images
const Image = ({ provided, snapshot, image }) => {
  return (
    <Box marginY={4} ref={provided.innerRef} snapshot={snapshot} {...provided.draggableProps} {...provided.dragHandleProps}>
      <img
        alt={`img - ${image.id}`}
        src={image.src}
        className="file-img"
      />
    </Box>
  );
};

// ImageList Component//
const ImageGride = ({ images, onDragEnd }) => {
  // render each image by calling Image component
  // Return the list of files//
  return (
    <Box borderBottomRadius={6} backgroundColor='#424242' padding={4}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" >
          {provided => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {images.map((image, index) => (
                <Draggable key={image.id} draggableId={image.id} index={index}>
                  {(provided, snapshot) => (
                    <Image provided={provided} snapshot={snapshot} image={image} />
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default ImageGride;