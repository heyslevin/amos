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
} from '@chakra-ui/react';
import React from 'react';

import { BiCollection, BiCube } from 'react-icons/bi';

export default function Profile() {
  return (
    <VStack>
      <Flex
        flex-grow="1"
        pt={100}
        justify-content="flex-start"
        align="center"
        width="100%"
        minWidth="max-content"
        flex-shrink="0"
      >
        <Avatar name="James Donovan" size="xl"></Avatar>
        <VStack align="left" pl={4} flex="1">
          <Heading>James Donovan</Heading>
          <Text color="gray.400">@jamesdonovan</Text>
        </VStack>
      </Flex>
      <Divider />
      <Flex width="100%" justifyContent="left" pt={10}>
        <VStack flex="1" justifyContent="left" align="flex-start">
          <VStack flex="1" align="stretch">
            <Button
              justifyContent="flex-start"
              variant="ghost"
              leftIcon={<BiCube />}
            >
              Your Products
            </Button>
            <Button
              justifyContent="flex-start"
              variant="ghost"
              leftIcon={<BiCollection />}
            >
              Your Collections
            </Button>
          </VStack>
        </VStack>
        <VStack flex="3" align="left">
          <Heading>Options</Heading>
        </VStack>
      </Flex>
    </VStack>
  );
}
