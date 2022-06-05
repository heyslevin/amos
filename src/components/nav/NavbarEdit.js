import { Box, Button, Divider, Flex, Heading, HStack } from '@chakra-ui/react';
import React from 'react';

export default function NavbarEdit() {
  return (
    <Box>
      <HStack px={8} py={3}>
        <Flex flex="1" justifyContent="space-between" align="center">
          <Box>
            <Heading size="md">Add New Collection</Heading>
          </Box>
          <Button variant="outline">Cancel</Button>
        </Flex>
      </HStack>
      <Divider borderColor="white" />
    </Box>
  );
}
