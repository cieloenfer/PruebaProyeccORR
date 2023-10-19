import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Description = ({ description }) => {
  return (
    <Box p="4">
      <Text fontSize="lg">{description}</Text>
    </Box>
  );
};

export default Description;
