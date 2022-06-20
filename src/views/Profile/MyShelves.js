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
import AddCollectionBlock from '../../components/layout/AddCollectionBlock';

import { loadShelves } from '../../utils/dataLoad';

export default function MyShelves({ setShelfId }) {
  const [myShelvesData, setMyShelvesData] = useState([]);
  const [finishedLoading, setFinishLoading] = useState(false);
  const [currentShelf, setCurrentShelf] = useState(undefined);

  const myShelves = (
    <React.Fragment>
      {myShelvesData.map((shelf, i) => (
        <MyShelf
          key={i}
          shelfData={shelf}
          finishedLoading={finishedLoading}
          setShelfId={setShelfId}
        />
      ))}

      <AddCollectionBlock />
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
        Add Shelf
      </Button>
      <Flex pb={10} direction="row" wrap="wrap">
        {finishedLoading ? myShelves : skeletons}
      </Flex>
    </VStack>
  );
}
