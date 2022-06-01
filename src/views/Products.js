import React from 'react';

import { VStack, Button, Heading, Flex, Center } from '@chakra-ui/react';

import Product from '../components/layout/Product';

import { fetchShelfProducts } from '../utils/dataLoad';
import { useState, useEffect } from 'react';

export default function Products({ shelfId }) {
  const [productsInShelf, setProductsInShelf] = useState([]);
  const [status, setStatus] = useState('Loading...');

  let allProducts = productsInShelf.map((product, i) => {
    return <Product key={i} name={product.name} brand={product.brand} />;
  });
  useEffect(() => {
    //fix here
    fetchShelfProducts(shelfId, setProductsInShelf);
  }, []);

  useEffect(() => {
    console.log(productsInShelf.length);
    setStatus(productsInShelf.length === 0 ? 'No products' : 'Loading...');
  }, [productsInShelf]);

  let loading = (
    <Center>
      <Heading>{status}</Heading>
    </Center>
  );

  return (
    <VStack>
      <Heading>My Products</Heading>
      <Button>Add product</Button>

      <Flex wrap="wrap">{allProducts.length === 0 ? status : allProducts}</Flex>
    </VStack>
  );
}
