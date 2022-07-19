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
  useColorModeValue,
} from '@chakra-ui/react';

import { BiArrowBack } from 'react-icons/bi';

import Product from '../components/layout/Product';

import { fetchShelfProducts, loadShelfName } from '../utils/dataLoad';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import AddProductBlock from '../components/layout/AddProductBlock';

export default function ShelfView({ userData, shelfId }) {
  const [productsInShelf, setProductsInShelf] = useState([]);
  const [emptyProducts, setEmptyProducts] = useState(false);
  const [shelfName, setShelfName] = useState(undefined);

  let allProducts = (
    <React.Fragment>
      {productsInShelf.map((product, i) => {
        return <Product key={i} productData={product} />;
      })}
      <AddProductBlock />
    </React.Fragment>
  );
  useEffect(() => {
    //fix here
    fetchShelfProducts(shelfId, setProductsInShelf, setEmptyProducts);
    const name = loadShelfName(shelfId, setShelfName);
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
        {userData.name}'s Shop
      </Button>
      <VStack>
        <Flex width="100%">
          <Flex
            width="100%"
            flex-direction="row"
            align="flex-start"
            justifyContent="space-between"
          >
            <Heading>{shelfName}</Heading>
            <Button
              as={RouterLink}
              to="/my-shelves/edit/new-product"
              bg="purple.600"
              color={useColorModeValue('white', 'white')}
              _hover={{ bg: 'purple.800' }}
            >
              Add Product
            </Button>
          </Flex>
        </Flex>
        <Divider />
        <HStack w="100%" height="40px" pt={2} color="gray.500">
          <HStack>
            <Avatar
              name={userData.name}
              src={userData.profileImg}
              size="sm"
            ></Avatar>
            <Text>{userData.name}</Text>
          </HStack>
          <Divider orientation="vertical" />
          <Text>10 Products</Text>
          <Divider orientation="vertical" />
          <Text>Products are affiliated</Text>
        </HStack>

        <Flex wrap="wrap" pt={8} width="100%" justify="center">
          {allProducts.length === 0 ? skeleton : allProducts}
        </Flex>
      </VStack>
    </Container>
  );
}
