import React from 'react';

import { VStack, Button, Heading, Flex } from '@chakra-ui/react';

import Product from '../components/layout/Product';

export default function Products() {
  return (
    <VStack>
      <Heading>My Products</Heading>
      <Button>Add product</Button>

      <Flex wrap="wrap">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Flex>
    </VStack>
  );
}
