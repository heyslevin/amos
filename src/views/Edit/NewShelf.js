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
import { useState } from 'react';
import { BiCheckCircle } from 'react-icons/bi';

import { addNewShelf } from '../../utils/dataSend';

export default function NewShelf() {
  const [formData, setFormData] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [successForm, setSuccessForm] = useState(false);

  const updateInfo = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setisLoading(true);
    addNewShelf({
      title: formData.title,
      description: formData.description,
    });
    setFormData({
      title: '',
      description: '',
    });
    setSuccessForm(true);
    setTimeout(() => {
      setisLoading(false);
    }, 300);
  };

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
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel htmlFor="title" fontSize="1em">
                  Title
                </FormLabel>
                <Input
                  mb={5}
                  id="title"
                  name="title"
                  placeholder="Enter Title"
                  onChange={updateInfo}
                  value={formData.title}
                />
                <FormLabel htmlFor="description" fontSize="1em">
                  Description
                </FormLabel>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Enter Description..."
                  onChange={updateInfo}
                  value={formData.description}
                />
              </FormControl>

              <HStack pt={8} justify="space-between">
                <Button variant="outline">Cancel</Button>
                <Button
                  isLoading={isLoading}
                  type="submit"
                  backgroundColor="purple.700"
                  rightIcon={successForm ? <BiCheckCircle /> : ''}
                >
                  {successForm ? 'Saved!' : 'Save'}
                </Button>
              </HStack>
            </form>
          </Box>
        </Container>
      </Flex>
    </VStack>
  );
}
