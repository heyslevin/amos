import React from 'react';

import {
  VStack,
  Heading,
  LinkBox,
  LinkOverlay,
  Image,
  HStack,
  Text,
  Flex,
  Center,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';

import { loadShelfImageSamples } from '../../utils/dataLoad';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Shelf({ shelfData, setShelfId }) {
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    loadShelfImageSamples(shelfData.id, setProductImages);
  }, [shelfData]);

  const noImage = (
    <Center w="100%" h="100%">
      <Text>No image</Text>
    </Center>
  );

  return (
    <LinkBox>
      <Flex
        w="1000px"
        p={3}
        border="1px solid"
        borderColor="gray.200"
        rounded="lg"
        m={1}
        direction="column"
        align="center"
      >
        <Flex direction="row" h="250px" w="100%">
          <Flex height="100%" flex="1" rounded="lg" overflow="hidden" m={2}>
            {productImages[0] ? (
              <Image
                objectFit="cover"
                h="100%"
                w="100%"
                src={productImages[0]}
              ></Image>
            ) : (
              noImage
            )}
          </Flex>
          <Flex height="100%" flex="1" rounded="lg" overflow="hidden" m={2}>
            {productImages[1] ? (
              <Image
                objectFit="cover"
                h="100%"
                w="100%"
                src={productImages[1]}
              ></Image>
            ) : (
              noImage
            )}
          </Flex>
          <Flex height="100%" flex="1" rounded="lg" overflow="hidden" m={2}>
            {productImages[2] ? (
              <Image
                objectFit="cover"
                h="100%"
                w="100%"
                src={productImages[2]}
              ></Image>
            ) : (
              noImage
            )}
          </Flex>
        </Flex>
        <Flex direction="column" align="center" mt={5}>
          <Heading size="md">{shelfData.title}</Heading>
          <Text>13 productos</Text>
          <Text fontSize="xs" color="gray.500">
            {shelfData.id}
          </Text>
          <LinkOverlay
            as={RouterLink}
            onClick={() => setShelfId(shelfData.id)}
            to="/shelf-view"
            mt="0 !important"
            p={0}
          />
        </Flex>
      </Flex>
    </LinkBox>
  );
}
