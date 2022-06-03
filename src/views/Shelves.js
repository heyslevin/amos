import {
  Flex,
  Heading,
  HStack,
  VStack,
  Center,
  Skeleton,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { loadShelves } from '../utils/dataLoad';

import Shelf from '../components/layout/Shelf';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Shelves({ setShelfId }) {
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
    <VStack>
      <Heading>This are my shelves</Heading>
      <Flex wrap="wrap" justifyContent="center">
        {/* <Shelf title="Products for Sensitive Skin" />
        <Shelf title="My favorite cleansers" /> */}
        {allShelves.length === 0 ? skeleton : allShelves}
      </Flex>
    </VStack>
  );
}
