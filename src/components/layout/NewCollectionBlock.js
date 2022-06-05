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

export default function CreateCollection() {
  const { colorMode } = useColorMode();

  return (
    <LightMode>
      <Flex
        direction="column"
        rounded="lg"
        mr={2}
        ms={0}
        mt={2}
        h={300}
        w={300}
        background="none"
        border="1px solid"
        borderColor="gray.200"
        overflow="hidden"
        transition="0.2s ease"
      >
        <VStack h="100%" justifyContent="center" bg="gray.100">
          <Heading size="md" textAlign="center" color="purple.800">
            Start a New Collection
          </Heading>
          <Text color="black">Add a new collection of products</Text>
          <Flex>
            <Button
              mt={3}
              variant="outline"
              bg="whitesmoke"
              colorScheme="purple"
            >
              New Collection
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </LightMode>
  );
}
