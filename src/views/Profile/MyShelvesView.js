import {
  Flex,
  Heading,
  HStack,
  VStack,
  Center,
  Skeleton,
  Box,
  Avatar,
  Container,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { loadShelves } from '../../utils/dataLoad';

import ShowMoreText from 'react-show-more-text';

import Shelf from '../../components/layout/Shelf';
import { useEffect } from 'react';
import { useState } from 'react';

import { FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

export default function UserShelves({ userData, setShelfId }) {
  const [shelvesData, setShelvesData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { name, bio, email, handle, profileImg, socialsIG, title, uid } =
    userData;

  let allShelves = shelvesData.map((shelf, i) => (
    <Shelf key={i} shelfData={shelf} setShelfId={setShelfId} />
  ));

  let skeleton = (
    <VStack>
      <Skeleton w="1000px" h="300px" rounded="lg" />
      <Skeleton w="1000px" h="300px" rounded="lg" />
    </VStack>
  );

  useEffect(() => {
    loadShelves(setShelvesData, setLoading, userData);
  }, [userData]);

  return (
    <Container maxW="container.lg" rounded="lg" mt={10}>
      <VStack>
        <Flex
          border="1px solid"
          borderColor="whiteAlpha.300"
          rounded="lg"
          p={10}
          justify="center"
          mb={18}
        >
          <HStack w="100%" justify="center">
            <Flex align="flex-start" h="100%" pr={30}>
              <Avatar name={name} size="2xl" src={profileImg} />
            </Flex>
            <Flex justify="flex-start">
              <Flex direction="column" align="flex-start">
                <Heading size="md">{name}</Heading>
                <Text mt={0} color="gray.300">
                  {title}
                </Text>
                <HStack py={3}>
                  <FiInstagram />
                  <FiYoutube />
                  <FiTwitter />
                </HStack>
                <Flex>
                  <Text
                    as={ShowMoreText}
                    fontSize="md"
                    more={<Text as="u">Read More</Text>}
                    less={<Text as="u">Read Less</Text>}
                    width="400px"
                    color="gray.400"
                  >
                    {bio}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </HStack>
        </Flex>
        <Flex wrap="wrap" justifyContent="center">
          {allShelves.length === 0 ? skeleton : allShelves}
        </Flex>
      </VStack>
    </Container>
  );
}
