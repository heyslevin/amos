import {
  LinkBox,
  VStack,
  Image,
  Box,
  Text,
  LinkOverlay,
} from '@chakra-ui/react';

function Product({ name, brand }) {
  return (
    <LinkBox
      as={VStack}
      border="1px solid"
      borderColor="gray.200"
      p={3}
      rounded="lg"
      m="5px"
      flex="0"
      flexBasis="calc(33.33333% - 10px)"
      boxSizing="border-box"
    >
      <Image mt={0} src="https://bit.ly/dan-abramov"></Image>
      <Box align="center">
        <Text fontSize="sm">{brand}</Text>
        <Text>{name}</Text>
      </Box>
      <LinkOverlay mt="0 !important" p={0} href="www.firmalt.com" />
    </LinkBox>
  );
}

export default Product;
