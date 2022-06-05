import { Flex, Heading, VStack } from '@chakra-ui/react';
import React from 'react';

export default function NewShelf() {
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
        <Heading>New Shelf</Heading>
      </Flex>
    </VStack>
  );
}
