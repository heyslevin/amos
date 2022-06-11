import React from 'react';

import {
  VStack,
  HStack,
  Button,
  Heading,
  Flex,
  Center,
  Skeleton,
  Box,
  Container,
  Divider,
  Text,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
} from '@chakra-ui/react';

import { BiArrowBack } from 'react-icons/bi';

import Product from '../components/layout/Product';

import { fetchShelfProducts, loadShelfName } from '../utils/dataLoad';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export default function SingleShelf() {
  const [productsInShelf, setProductsInShelf] = useState([]);
  const [emptyProducts, setEmptyProducts] = useState(false);
  const [shelfName, setShelfName] = useState(undefined);

  const tempShelfId = '10O1qNmjvGd8Rk2pnKpl';

  let allProducts = productsInShelf.map((product, i) => {
    return <Product key={i} name={product.name} brand={product.brand} />;
  });

  useEffect(() => {
    //fix here
    fetchShelfProducts(tempShelfId, setProductsInShelf, setEmptyProducts);
    const name = loadShelfName(tempShelfId, setShelfName);
  }, []);

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

  const navigate = useNavigate();

  return (
    <Container maxW="container.lg" rounded="lg" mt={10}>
      <Button
        leftIcon={<BiArrowBack />}
        onClick={() => navigate(-1)}
        variant="link"
        fontSize={13}
        pb={3}
        color="gray.500"
      >
        Naomi Watts Shop
      </Button>
      <VStack>
        <Flex align="flex-start" width="100%">
          <Heading>{shelfName}</Heading>
        </Flex>
        <Divider />
        <HStack w="100%" height="40px" pt={2} color="gray.500">
          <HStack>
            <Avatar name="Naomi Watts" size="sm"></Avatar>
            <Text>Naomi Watts</Text>
          </HStack>
          <Divider orientation="vertical" />
          <Text>10 Products</Text>
          <Divider orientation="vertical" />
          <Text>Products are affiliated</Text>
        </HStack>

        <Flex wrap="wrap" pt={8}>
          {allProducts.length === 0 ? skeleton : allProducts}
          {allProducts}
          {allProducts}
          {allProducts}
          {allProducts}
        </Flex>
      </VStack>
    </Container>
  );
}
