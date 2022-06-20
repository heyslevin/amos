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
import { loadShelves } from '../utils/dataLoad';

import ShowMoreText from 'react-show-more-text';

import Shelf from '../components/layout/Shelf';
import { useEffect } from 'react';
import { useState } from 'react';

import { FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

export default function UserShelves({ setShelfId }) {
  const [shelvesData, setShelvesData] = useState([]);
  const [loading, setLoading] = useState(false);

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
    loadShelves(setShelvesData, setLoading);
  }, []);

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
              <Avatar
                name="Naomi Watts"
                size="2xl"
                src="https://bit.ly/dan-abramov"
              />
            </Flex>
            <Flex justify="flex-start">
              <Flex direction="column" align="flex-start">
                <Heading size="md">Naomi Watts</Heading>
                <Text mt={0} color="gray.300">
                  Skincare Lover
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
                    Carissa Ferreri is a Los Angeles based makeup artist and
                    groomer. Her celebrity clientele includes Suki Waterhouse,
                    Gina Rodriguez, Annette Benning, Paris Jackson, Yalitza
                    Aparicio, Ansel Elgort, Cole Sprouse, and Cary Elwes.
                    Carissa has collaborated on major campaigns including Yeezy,
                    Marc Jacobs, Stella McCartney, L’Oreal and Kimpling. Her
                    work has appeared in the pages of Vanity Fair, Vogue China,
                    Allure, ELLE, and GQ, and her artistry has been captured by
                    top photographers such as Nino Munoz, Brian Bowen Smith,
                    Douglas Friedman, and Ben Watts. Combining a background in
                    journalism with her passion for makeup and the essentials of
                    beauty, Carissa's expertise has been featured in
                    publications including Allure, InStyle, Refinery29, and
                    Byrdie Beauty and has allowed her to partner with global
                    brands such as Lancôme, L’Oreal, Sisley Paris, Glossier,
                    Benefit, and Clinique.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </HStack>
        </Flex>
        <Flex wrap="wrap" justifyContent="center">
          {/* <Shelf title="Products for Sensitive Skin" />
        <Shelf title="My favorite cleansers" /> */}
          {allShelves.length === 0 ? skeleton : allShelves}
        </Flex>
      </VStack>
    </Container>
  );
}
