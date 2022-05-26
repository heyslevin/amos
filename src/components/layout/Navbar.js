import { Text, Flex, Heading, HStack, Box } from '@chakra-ui/react';
import React from 'react';

export default function Navbar() {
  return (
    <HStack p={2}>
      <Flex flex="1" justifyContent="space-between">
        <Box>
          <Heading size="lg">Amos Shelves</Heading>
        </Box>
        <Box>
          <Text>A project by heyslevin</Text>
        </Box>
      </Flex>
    </HStack>
  );
}
