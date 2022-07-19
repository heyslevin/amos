import {
  Divider,
  Center,
  Flex,
  Heading,
  Skeleton,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import React from 'react';
import randomColor from 'randomcolor';
import { Link as RouterLink } from 'react-router-dom';

export default function MyShelf({ shelfData, finishedLoading, setShelfId }) {
  return (
    <Skeleton isLoaded={finishedLoading}>
      <LinkBox>
        <Flex
          mr={2}
          ms={0}
          mt={2}
          direction="column"
          rounded="lg"
          h={300}
          w={300}
          background="none"
          border="1px solid"
          borderColor="gray.200"
          overflow="hidden"
          _hover={{
            boxShadow: 'var(--chakra-shadows-lg)',
          }}
          transition="0.2s ease"
        >
          <Flex
            p={3}
            flexBasis="60%"
            background={randomColor({ luminosity: 'light' })}
            w="100%"
            justifyContent="center"
          >
            <Center>
              <Heading size="4xl" color={randomColor({ luminosity: 'dark' })}>
                {shelfData.title.charAt(0).toUpperCase()}
              </Heading>
            </Center>
          </Flex>
          <Divider borderColor="gray.300" />
          <Flex p={3} flex="1">
            <Heading size="md">{shelfData.title}</Heading>
          </Flex>
        </Flex>
        <LinkOverlay
          mt="0 !important"
          p={0}
          as={RouterLink}
          onClick={() => alert(shelfData.id)}
          to="/shelf-view"
        />
      </LinkBox>
    </Skeleton>
  );
}
