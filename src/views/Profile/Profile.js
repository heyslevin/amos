import {
  Flex,
  Heading,
  Avatar,
  Text,
  VStack,
  Divider,
  HStack,
  Container,
  Box,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import { BiCollection, BiCube } from 'react-icons/bi';
import { FaGratipay } from 'react-icons/fa';
import { Outlet, NavLink, Link as RouterLink } from 'react-router-dom';

export default function Profile({ userData }) {
  //Button Styling
  let activeStyle = {
    background: 'var(--chakra-colors-gray-100)',
  };

  let activeStyle2 = 'gray.100';

  return (
    <VStack px={8}>
      <Flex
        flex-grow="1"
        pt={100}
        justify-content="flex-start"
        align="center"
        width="100%"
        minWidth="max-content"
        flex-shrink="0"
      >
        <Avatar name={userData.name} size="xl"></Avatar>
        <VStack align="left" pl={4} flex="1">
          <Heading>{userData.name}</Heading>
          <Text color="gray.400">@pendingHandle</Text>
        </VStack>
      </Flex>
      <Divider pt={5} />

      <Flex width="100%" pt={10}>
        <VStack flex="1" align="flex-start">
          <VStack flex="1" align="stretch">
            <Button
              as={NavLink}
              to="my-shelves"
              justifyContent="flex-start"
              variant="ghost"
              leftIcon={<BiCollection />}
              _focus={{
                outline: '0 !important',
              }}
              _activeLink={{
                background: useColorModeValue('gray.100', 'gray.700'),
              }}
            >
              Your Collections
            </Button>
            <Button
              as={NavLink}
              to="my-products"
              justifyContent="flex-start"
              variant="ghost"
              leftIcon={<BiCube />}
              _focus={{
                outline: '0 !important',
              }}
              _activeLink={{
                background: useColorModeValue('gray.100', 'gray.700'),
              }}
            >
              Your Products
            </Button>
          </VStack>
        </VStack>
        <VStack flex="3" align="flex-start">
          <Outlet />
        </VStack>
      </Flex>
    </VStack>
  );
}
