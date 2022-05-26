import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  Flex,
  Image,
  LinkBox,
  LinkOverlay,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './utils/ColorModeSwitcher';
import { Logo } from './components/layout/Logo';
import { useEffect } from 'react';

import auth from './utils/firebase';

import Navbar from './components/layout/Navbar';
import Product from './components/layout/Product';

function App() {
  useEffect(() => {
    async function loadData() {
      let authMethods = await auth();
      const login = await authMethods.authInit();
    }
    loadData();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <VStack>
        <Heading>My Shelf</Heading>
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
    </ChakraProvider>
  );
}

export default App;
