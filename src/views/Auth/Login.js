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

import { signInUser } from '../../utils/auth';
import { loadUserData } from '../../utils/dataLoad';

export default function SignUp({ userData, setUserData }) {
  const inputTextColor = useColorModeValue('black', 'white');

  const [formData, setFormData] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [styledMessage, setStyledMessage] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(false);
  const [signInError, setSignInError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    let timerId;
    // Check if sign in is successful, if true, redirect
    if (userData) {
      timerId = setTimeout(() => {
        navigate('/profile/my-shelves');
      }, 2000);
    }

    return () => clearTimeout(timerId);
  }, [userData, navigate]);

  const updateInfo = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let userId = await signInUser(
      formData,
      setIsLoading,
      setSignInSuccess,
      setSignInError
    );
    let userLoadedData = await loadUserData(userId);
    setUserData(userLoadedData);
  };

  return (
    <Container mt={20} align="center">
      <Heading textAlign="center">Log in to your Amos account</Heading>
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

            <Button
              w="100%"
              mt={3}
              type="submit"
              backgroundColor={signInSuccess ? 'green' : 'purple.700'}
              colorScheme={signInSuccess ? 'green' : 'purple'}
              color="white"
              isLoading={isLoading}
              rightIcon={signInSuccess ? <BiCheckCircle /> : ''}
              disabled={signInSuccess}
              _disabled={{
                bg: 'var(--chakra-colors-green-500)',
                opacity: '1',
                borderColor: '#bec3c9',
              }}
              _focus={signInSuccess ? { outline: 'none' } : ''}
            >
              {signInSuccess ? 'Success!' : 'Sign in'}
            </Button>
            <Text pt={3} textAlign="left" color="red" fontWeight="medium">
              {signInError
                ? 'Something has gone horribly wrong. Call an ambulance, call the police, or check your email or password.'
                : ''}
            </Text>
          </FormControl>
        </form>
        <Link
          fontSize="sm"
          style={{ textDecoration: 'underline' }}
          variant="underline"
          color={useColorModeValue('purple.600', 'purple.100')}
          pt={8}
        >
          Don't have an account? Sign up!
        </Link>
      </Flex>
      {/* Redirect on SignUp */}
    </Container>
  );
}
