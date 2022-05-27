import { Flex, Heading, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

import Shelf from '../components/layout/Shelf';

export default function Shelves() {
  return (
    <VStack>
      <Heading>This are my shelves</Heading>
      <Flex wrap="wrap" justifyContent="center">
        <Shelf title="Products for Sensitive Skin" />
        <Shelf title="My favorite cleansers" />
      </Flex>
    </VStack>
  );
}
