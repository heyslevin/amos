import {
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  Button,
  IconButton,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';
import PasswordValidator from 'password-validator';
import React from 'react';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function PasswordInput({
  updateInfo,
  setPasswordIsValid,
  passwordIsValid,
}) {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');
  const handleClick = () => setShow(!show);

  //Password validation
  var schema = new PasswordValidator();
  schema
    .is()
    .min(8) // Minimum length 8
    .is()
    .max(100) // Maximum length 100
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .not()
    .spaces() // Should not have spaces
    .is()
    .not()
    .oneOf(['Passw0rd', 'Password123']); // Blacklist these values

  const handleChange = e => {
    updateInfo(e);
    setPasswordIsValid(schema.validate(e.target.value, { details: true }));
  };

  return (
    <FormControl isRequired>
      <FormLabel htmlFor="password" mt={5} fontSize="sm">
        Password
      </FormLabel>
      <InputGroup>
        <Input
          id="password"
          name="password"
          placeholder="8 Characters"
          _placeholder={{
            color: useColorModeValue('black', 'white'),
            opacity: '.4',
          }}
          type={show ? 'text' : 'password'}
          onChange={handleChange}
        />
        <InputRightElement>
          <IconButton
            p={3}
            variant="link"
            icon={show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            onClick={handleClick}
            _focus={{ outline: 'none' }}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}
