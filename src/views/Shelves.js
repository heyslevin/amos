import { Flex, Heading, HStack, VStack, Center } from '@chakra-ui/react';
import React from 'react';
import { loadShelves } from '../utils/initialLoad';

import Shelf from '../components/layout/Shelf';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Shelves() {
  const [shelves, setShelves] = useState([]);

  let allShelves = shelves.map(shelf => <Shelf title={shelf.name} />);
  let loading = (
    <Center>
      <Heading>Loading...</Heading>
    </Center>
  );

  useEffect(() => {
    console.log(allShelves.length);
    loadShelves(setShelves);
  }, []);

  return (
    <VStack>
      <Heading>This are my shelves</Heading>
      <Flex wrap="wrap" justifyContent="center">
        {/* <Shelf title="Products for Sensitive Skin" />
        <Shelf title="My favorite cleansers" /> */}
        {allShelves.length == 0 ? loading : allShelves}
      </Flex>
    </VStack>
  );
}
