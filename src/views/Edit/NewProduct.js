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

import { addNewProduct } from '../../utils/dataSend';
import { uploadFromBlobAsync } from '../../utils/storage';

export default function NewProduct({ shelfId }) {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    url: '',
    description: '',
    collection: '',
  });
  const [isLoading, setisLoading] = useState(false);
  const [successForm, setSuccessForm] = useState(false);
  const [file, setFile] = useState(undefined);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const fileTypes = ['JPEG', 'PNG', 'GIF'];

  const uploadFile = async file => {
    if (!file) {
      return;
    }

    try {
      const url = await uploadFromBlobAsync({
        blobUrl: URL.createObjectURL(file),
        name: `${file.name}_${Date.now()}`,
      });
      console.log('up it goes' + url);
      return url;
    } catch (error) {
      console.log(error);
    }
    setUploadSuccess(true);
  };

  const updateInfo = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setisLoading(true);

    const imageUrl = await uploadFile(file);

    // Handle Saving in Database
    addNewProduct({
      name: formData.name,
      brand: formData.brand,
      url: formData.url,
      description: formData.description,
      shelves: [shelfId],
      image: imageUrl,
    });

    //Clean up form
    setFormData({
      name: '',
      brand: '',
      url: '',
      description: '',
    });
    setSuccessForm(true);
    setTimeout(() => {
      setisLoading(false);
    }, 300);
  };

  // useEffect(() => {
  //   setShelf('Product');
  // }, [setShelf]);

  return (
    <VStack px={8} mb={10}>
      <Flex
        flex-grow="1"
        pt={5}
        justify-content="flex-start"
        align="center"
        width="100%"
        minWidth="max-content"
        flex-shrink="0"
      >
        <Container align="center">
          <Heading pb={10} size="lg">
            Add a new product
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
                <FormLabel htmlFor="url" fontSize="1em">
                  Link
                </FormLabel>
                <Input
                  mb={5}
                  id="url"
                  name="url"
                  placeholder="Enter url for product"
                  onChange={updateInfo}
                  value={formData.url}
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
                <Dropzone
                  setFile={setFile}
                  file={file}
                  uploadSuccess={uploadSuccess}
                />
              </FormControl>

              <HStack pt={8} justify="space-between">
                <Button variant="outline">Cancel</Button>
                <Button
                  isLoading={isLoading}
                  type="submit"
                  backgroundColor="purple.700"
                  rightIcon={successForm ? <BiCheckCircle /> : ''}
                  colorScheme="purple"
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
