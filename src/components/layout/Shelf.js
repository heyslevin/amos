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

export default function Shelf({ shelfData, setShelfId }) {
  console.log('data time');
  console.log(shelfData);

  return (
    <LinkBox>
      <VStack
        w="1000px"
        h="300px"
        p={3}
        border="1px solid"
        borderColor="gray.200"
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

        <Heading size="md">{shelfData.title}</Heading>
        <Text>13 productos</Text>
        <Text fontSize="xs" color="gray.500">
          {shelfData.id}
        </Text>
        <LinkOverlay
          as={RouterLink}
          onClick={() => setShelfId(shelfData.id)}
          to="/products"
          mt="0 !important"
          p={0}
        />
      </VStack>
    </LinkBox>
  );
}
