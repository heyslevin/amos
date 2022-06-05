import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react';
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
        <Container align="center">
          <Heading pb={10} size="lg">
            Create a new shelf
          </Heading>
          <Box border="1px solid" borderColor="gray.600" p={3} rounded="lg">
            <FormControl>
              <FormLabel htmlFor="title" fontSize="1em">
                Title
              </FormLabel>
              <Input mb={5} id="title" placeholder="Enter Title" />
              <FormLabel htmlFor="description" fontSize="1em">
                Description
              </FormLabel>
              <Textarea id="description" placeholder="Enter Description..." />
            </FormControl>

            <HStack pt={8} justify="space-between">
              <Button variant="outline">Cancel</Button>
              <Button backgroundColor="purple.700">Save</Button>
            </HStack>
          </Box>
        </Container>
      </Flex>
    </VStack>
  );
}
