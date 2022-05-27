import { Flex, Heading, HStack, Box, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <HStack p={2}>
      <Flex flex="1" justifyContent="space-between">
        <Box>
          <Heading size="lg">Amos Shelves</Heading>
        </Box>
        <Box>
          <Link ml={3} as={RouterLink} to="/Products">
            Products
          </Link>
          <Link ml={3} as={RouterLink} to="/Shelves">
            Shelves
          </Link>
        </Box>
      </Flex>
    </HStack>
  );
}
