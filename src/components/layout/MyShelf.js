import {
  Divider,
  Center,
  Flex,
  Heading,
  Skeleton,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import randomColor from 'randomcolor';

export default function MyShelf({ shelfData, finishedLoading }) {
  console.log(finishedLoading);
  return (
    <Skeleton isLoaded={finishedLoading}>
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
              {shelfData.title.charAt(0)}
            </Heading>
          </Center>
        </Flex>
        <Divider borderColor="gray.300" />
        <Flex p={3} flex="1">
          <Heading size="md">{shelfData.title}</Heading>
        </Flex>
      </Flex>
    </Skeleton>
  );
}
