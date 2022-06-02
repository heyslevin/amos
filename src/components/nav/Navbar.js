import {
  Flex,
  Heading,
  HStack,
  Box,
  Link,
  Avatar,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../../utils/ColorModeSwitcher';

export default function Navbar() {
  return (
    <HStack p={2}>
      <Flex flex="1" justifyContent="space-between" align="center">
        <Box>
          <Heading size="lg">Amos Shelves</Heading>
        </Box>
        <Flex align="center">
          <Link mr={5} as={RouterLink} to="/Shelves">
            Shelves
          </Link>
          <Flex as={RouterLink} to="/Profile" align="center">
            <Avatar mr={1} size="sm" name="James Donovan" />
            <Link>Profile</Link>
          </Flex>
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </HStack>
  );
}
