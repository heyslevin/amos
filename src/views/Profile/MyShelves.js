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
  Divider,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link as RouterLink, Outlet } from 'react-router-dom';

import MyShelf from '../../components/layout/MyShelf';
import CreateCollection from '../../components/layout/NewCollectionBlock';

import { loadShelves } from '../../utils/dataLoad';

export default function MyCollections() {
  const [myShelvesData, setMyShelvesData] = useState([]);
  const [finishedLoading, setFinishLoading] = useState(false);

  const myShelves = (
    <React.Fragment>
      {myShelvesData.map((shelf, i) => (
        <MyShelf key={i} shelfData={shelf} finishedLoading={finishedLoading} />
      ))}

      <CreateCollection />
    </React.Fragment>
  );

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
        as={RouterLink}
        to="/my-shelves/edit/new-shelf"
        bg="purple.600"
        color={useColorModeValue('white', 'white')}
        _hover={{ bg: 'purple.800' }}
      >
        Add Collection
      </Button>
      <Flex pb={10} direction="row" wrap="wrap">
        {finishedLoading ? myShelves : skeletons}
      </Flex>
    </VStack>
  );
}
