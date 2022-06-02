import React from 'react';

import {
  VStack,
  HStack,
  Button,
  Heading,
  Flex,
  Center,
  Skeleton,
} from '@chakra-ui/react';

import Product from '../components/layout/Product';

import { fetchShelfProducts } from '../utils/dataLoad';
import { useState, useEffect } from 'react';

export default function Products({ shelfId }) {
  const [productsInShelf, setProductsInShelf] = useState([]);
  const [emptyProducts, setEmptyProducts] = useState(false);

  let allProducts = productsInShelf.map((product, i) => {
    return <Product key={i} name={product.name} brand={product.brand} />;
  });

  useEffect(() => {
    //fix here
    fetchShelfProducts(shelfId, setProductsInShelf, setEmptyProducts);
  }, [shelfId]);

  let skeleton;
  if (!emptyProducts) {
    skeleton = (
      <HStack>
        <Skeleton w="300px" h="390px" rounded="lg" m="5px" />
        <Skeleton w="300px" h="390px" rounded="lg" m="5px" />
        <Skeleton w="300px" h="390px" rounded="lg" m="5px" />
      </HStack>
    );
  } else {
    skeleton = (
      <Center height="400px">
        <Heading>Oh no! No products :(</Heading>
      </Center>
    );
  }

  return (
    <VStack>
      <Heading>My Products</Heading>
      <Button>Add product</Button>

      <Flex wrap="wrap">
        {allProducts.length === 0 ? skeleton : allProducts}
      </Flex>
    </VStack>
  );
}
