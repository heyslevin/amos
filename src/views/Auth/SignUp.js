import {
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Input,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  AiFillCheckCircle,
  AiFillExclamationCircle,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
import { BiCheckCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import PasswordInput from '../../components/buttons/PasswordInput';

import { signUpUser } from '../../utils/auth';

export default function SignUp({ userData, setUserData }) {
  const inputTextColor = useColorModeValue('black', 'white');

  const [formData, setFormData] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [styledMessage, setStyledMessage] = useState(null);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    let timerId;
    if (userData) {
      timerId = setTimeout(() => {
        navigate('/profile/my-shelves');
      }, 2000);
    }

    return () => clearTimeout(timerId);
  }, [userData, navigate]);

  useEffect(() => {
    if (passwordIsValid.length > 0) {
      let messages = passwordIsValid.map(item => item.message);
      let styledMessages = messages.map((message, i) => {
        return (
          <Flex key={i}>
            <AiFillExclamationCircle color="red" />
            <Text pl={1} fontSize="xs" color="red">
              {message}
            </Text>
          </Flex>
        );
      });
      setStyledMessage(styledMessages);
    } else if (passwordIsValid.length === 0) {
      setStyledMessage(
        <Flex>
          <AiFillCheckCircle color="green" />
          <Text pl={1} fontSize="xs" color="green">
            Great password my guy
          </Text>
        </Flex>
      );
    }
  }, [passwordIsValid]);

  const updateInfo = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (passwordIsValid.length === 0) {
      try {
        let userLoadedData = await signUpUser(
          formData,
          setIsLoading,
          setSignUpSuccess
        );
        setUserData(userLoadedData);
      } catch (error) {
        setError(error);
      }
    }
  };

  return (
    <Container mt={20} align="center">
      <Heading textAlign="center">Create an account for free</Heading>
      <Text textAlign="center" mt={3} color="gray.400">
        Free forever. No Payment needed.
      </Text>
      <Flex
        // border="1px solid"
        // borderColor="gray.600"
        rounded="lg"
        p={3}
        mt={5}
        direction="column"
        justify="center"
      >
        <form onSubmit={handleSubmit}>
          <FormControl variant="floating" isRequired>
            <FormLabel htmlFor="name" mt={5} fontSize="sm">
              Name
            </FormLabel>
            <Input
              id="name"
              name="name"
              placeholder="Name"
              _placeholder={{
                color: useColorModeValue('black', 'white'),
                opacity: '.4',
              }}
              onChange={updateInfo}
            />
            <FormControl isRequired>
              <FormLabel htmlFor="email" mt={5} fontSize="sm">
                Email
              </FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                focusBorderColor="purple.300"
                _placeholder={{
                  color: useColorModeValue('black', 'white'),
                  opacity: '.4',
                }}
                onChange={updateInfo}
              />
            </FormControl>
            <FormErrorMessage>Email is required.</FormErrorMessage>

            <PasswordInput
              updateInfo={updateInfo}
              setPasswordIsValid={setPasswordIsValid}
              passwordIsValid={passwordIsValid}
            />
            <Flex direction="column" align="flex-start" pt={2}>
              {styledMessage}
            </Flex>

            <Flex justify="center" my={5}>
              <Checkbox colorScheme="purple">
                <Text fontSize="small">
                  By creating an account you are agreeing to our{' '}
                  <Link
                    style={{ textDecoration: 'underline' }}
                    variant="underline"
                    color={useColorModeValue('purple.600', 'purple.100')}
                  >
                    Terms and Conditions
                  </Link>
                </Text>
              </Checkbox>
            </Flex>
            <Button
              w="100%"
              mt={3}
              type="submit"
              backgroundColor={signUpSuccess ? 'green' : 'purple.700'}
              colorScheme={signUpSuccess ? 'green' : 'purple'}
              color="white"
              isLoading={isLoading}
              rightIcon={signUpSuccess ? <BiCheckCircle /> : ''}
              disabled={signUpSuccess}
              _disabled={{
                bg: 'var(--chakra-colors-green-500)',
                opacity: '1',
                borderColor: '#bec3c9',
              }}
              _focus={signUpSuccess ? { outline: 'none' } : ''}
            >
              {signUpSuccess ? 'Signed up!' : 'Sign up with email'}
            </Button>
          </FormControl>
        </form>
        <Link
          fontSize="sm"
          style={{ textDecoration: 'underline' }}
          variant="underline"
          color={useColorModeValue('purple.600', 'purple.100')}
          pt={8}
        >
          Already have an account?
        </Link>
      </Flex>
      {/* Redirect on SignUp */}
    </Container>
  );
}
