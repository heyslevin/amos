import {
  LinkBox,
  VStack,
  Image,
  Box,
  Text,
  LinkOverlay,
} from '@chakra-ui/react';

function Product() {
  return (
    <LinkBox as={VStack} border="1px solid white" p={3} rounded="lg" m="5px">
      <Image mt={0} src="https://bit.ly/dan-abramov"></Image>
      <Box align="center">
        <Text fontSize="sm">Avon</Text>
        <Text>Ibiza Hair G Series (G5)</Text>
      </Box>
      <LinkOverlay mt="0 !important" p={0} href="www.firmalt.com" />
    </LinkBox>
  );
}

export default Product;
