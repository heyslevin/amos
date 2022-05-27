import React from 'react';

import {
  VStack,
  Heading,
  LinkBox,
  LinkOverlay,
  Image,
  HStack,
  Text,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';

export default function Shelf({ title }) {
  return (
    <LinkBox>
      <VStack
        w="1000px"
        h="300px"
        p={3}
        border="1px solid white"
        rounded="lg"
        m={1}
      >
        <HStack overflow="hidden">
          <Image
            objectFit="cover "
            mt={0}
            src="https://bit.ly/dan-abramov"
          ></Image>
          <Image
            objectFit="cover "
            mt={0}
            src="https://bit.ly/dan-abramov"
          ></Image>
          <Image
            objectFit="cover "
            mt={0}
            src="https://bit.ly/dan-abramov"
          ></Image>
        </HStack>

        <Heading size="md">{title}</Heading>
        <Text>13 productos</Text>
        <LinkOverlay as={RouterLink} to="/products" mt="0 !important" p={0} />
      </VStack>
    </LinkBox>
  );
}
