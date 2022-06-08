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
  Text,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import { useState, useEffect } from 'react';
import { BiCheckCircle } from 'react-icons/bi';

import { FileUploader } from 'react-drag-drop-files';
import Dropzone from '../../components/forms/Dropzone';

import { addNewShelf } from '../../utils/dataSend';

export default function NewShelf({ setCategory }) {
  const [formData, setFormData] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [successForm, setSuccessForm] = useState(false);
  const [file, setFile] = useState({});

  const fileTypes = ['JPEG', 'PNG', 'GIF'];

  const handleChange = file => {
    setFile(file);
  };

  const updateInfo = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setisLoading(true);

    // Handle Saving in Database
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

  useEffect(() => {
    setCategory('Product');
  }, []);

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
            Create a new product
          </Heading>
          <Box border="1px solid" borderColor="gray.600" p={3} rounded="lg">
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel htmlFor="name" fontSize="1em">
                  Name
                </FormLabel>
                <Input
                  mb={5}
                  id="name"
                  name="name"
                  placeholder="Enter Product Name"
                  onChange={updateInfo}
                  value={formData.title}
                />
                <FormLabel htmlFor="brand" fontSize="1em">
                  Brand
                </FormLabel>
                <Input
                  mb={5}
                  id="brand"
                  name="brand"
                  placeholder="Enter brand"
                  onChange={updateInfo}
                  value={formData.title}
                />
                <FormLabel htmlFor="description" fontSize="1em">
                  Additional info (optional)
                </FormLabel>
                <Textarea
                  mb={5}
                  id="description"
                  name="description"
                  placeholder="Enter additional info, why you love it, etc."
                  onChange={updateInfo}
                  value={formData.description}
                />

                <FormLabel htmlFor="image" fontSize="1em">
                  Upload Image
                </FormLabel>
                <Dropzone setFile={setFile} file={file} />
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
