import {
  Button,
  DarkMode,
  Flex,
  Heading,
  HStack,
  LightMode,
  Text,
  useColorModeValue,
  VStack,
  Center,
  Skeleton,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from 'react';
import MyShelf from '../../components/layout/MyShelf';

import { loadShelves } from '../../utils/dataLoad';

export default function MyCollections() {
  const [myShelvesData, setMyShelvesData] = useState([]);
  const [finishedLoading, setFinishLoading] = useState(false);

  const myShelves = myShelvesData.map((shelf, i) => (
    <MyShelf shelfData={shelf} finishedLoading={finishedLoading} />
  ));

  let skeletons = (
    <HStack>
      <Skeleton isLoaded={finishedLoading} w={300} h={300} />
      <Skeleton isLoaded={finishedLoading} w={300} h={300} />
      <Skeleton isLoaded={finishedLoading} w={300} h={300} />
    </HStack>
  );

  useEffect(() => {
    loadShelves(setMyShelvesData, setFinishLoading);
  }, []);

  return (
    <VStack align="flex-start">
      <Button
        bg="purple.600"
        color={useColorModeValue('white', 'white')}
        _hover={{ bg: 'purple.800' }}
      >
        Add Collection
      </Button>
      <Flex>
        <HStack>{finishedLoading ? myShelves : skeletons}</HStack>
      </Flex>
    </VStack>
  );
}
