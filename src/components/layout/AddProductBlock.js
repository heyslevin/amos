import {
  Button,
  VStack,
  Text,
  Flex,
  Center,
  Heading,
  Divider,
  LightMode,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function AddProductBlock() {
  const { colorMode } = useColorMode();

  return (
    <LightMode>
      <Flex
        as={VStack}
        border="1px solid"
        p={3}
        rounded="lg"
        m="5px"
        flexBasis="calc(33.33333% - 10px)"
        boxSizing="border-box"
        background="none"
        borderColor="gray.200"
        overflow="hidden"
        transition="0.2s ease"
        bg="gray.100"
      >
        <VStack h="100%" justifyContent="center">
          <Heading size="md" textAlign="center" color="purple.800">
            Add a new product
          </Heading>
          {/* <Text color="black">Add a new collection of products</Text> */}
          <Flex>
            <Button
              as={RouterLink}
              mt={3}
              variant="outline"
              bg="whitesmoke"
              colorScheme="purple"
              to="/my-shelves/edit/new-product"
            >
              New Product
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </LightMode>
  );
}
