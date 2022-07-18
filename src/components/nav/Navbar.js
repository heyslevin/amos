import {
  Flex,
  Heading,
  HStack,
  Box,
  Link,
  Avatar,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../../utils/ColorModeSwitcher';
import { loadUserData } from '../../utils/dataLoad';

export default function Navbar({ userData }) {
  return (
    <HStack px={8} pt={3}>
      <Flex flex="1" justifyContent="space-between" align="center">
        <Box>
          <Heading size="lg">Amos Shelves</Heading>
        </Box>
        <Flex align="center">
          <Link mr={5} as={RouterLink} to="/shelves">
            Browse
          </Link>
          {userData && (
            <Link mr={5} as={RouterLink} to="/my-shelves-view">
              My Shelves
            </Link>
          )}
          {!userData && (
            <Link mr={5} as={RouterLink} to="/login">
              Login
            </Link>
          )}
          {!userData && (
            <Button as={RouterLink} to="/signup" mr={5}>
              Sign up
            </Button>
          )}

          {userData && (
            <Flex as={RouterLink} to="/profile" align="center">
              <Avatar mr={1} size="sm" name={userData.name} />
              <Text>Profile</Text>
            </Flex>
          )}

          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </HStack>
  );
}
