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
  FormHelperText,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { useState, useEffect } from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import { addNewShelf } from '../../utils/dataSend';

export default function NewShelf({ userData, setAdminNavTitle, setShelfId }) {
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [successForm, setSuccessForm] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    let timerId;
    if (successForm) {
      timerId = setTimeout(() => {
        navigate('/shelf-view');
      }, 2000);
    }
    return () => clearInterval(timerId);
  }, [successForm, navigate]);

  const updateInfo = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    console.log(formData.description);
    e.preventDefault();
    setIsLoading(true);

    await addNewShelf(
      {
        title: formData.title,
        description: formData.description,
        uid: userData.uid,
      },
      setError,
      setSuccessForm,
      setIsLoading,
      setShelfId
    );

    if (!error) {
      setFormData({
        title: '',
        description: '',
      });
    }
  };

  useEffect(() => {
    setAdminNavTitle('Shelf');
  }, [setAdminNavTitle]);

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
            {userData.name}'s new Shelf
          </Heading>
          <Box border="1px solid" borderColor="gray.600" p={3} rounded="lg">
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel htmlFor="title" fontSize="1em">
                  Title
                </FormLabel>
                <Input
                  required
                  mb={5}
                  id="title"
                  name="title"
                  placeholder="Enter Title"
                  onChange={updateInfo}
                  value={formData.title || ''}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="description" fontSize="1em">
                  Description (optional)
                </FormLabel>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Enter Description..."
                  onChange={updateInfo}
                  value={formData.description || ''}
                />
                <FormHelperText align="left">
                  You can add this description later ;)
                </FormHelperText>
              </FormControl>

              <HStack pt={8} justify="space-between">
                <Button variant="outline">Cancel</Button>
                <Button
                  isLoading={isLoading}
                  type="submit"
                  color="white"
                  backgroundColor="purple.700"
                  rightIcon={successForm ? <BiCheckCircle /> : ''}
                >
                  {successForm ? 'Saved!' : 'Save'}
                </Button>
              </HStack>
            </form>
            <Text pt={3} textAlign="left" color="red" fontWeight="medium">
              {error
                ? 'Something has gone horribly wrong. Please try again.'
                : ''}
            </Text>
          </Box>
        </Container>
      </Flex>
    </VStack>
  );
}
