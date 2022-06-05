import { Box, Flex, Heading, HStack } from '@chakra-ui/react';
import React from 'react';

export default function NavbarEdit() {
  return (
    <HStack px={8} pt={3}>
      <Flex flex="1" justifyContent="space-between" align="center">
        <Box>
          <Heading size="lg">Add New Collection</Heading>
        </Box>
      </Flex>
    </HStack>
  );
}
