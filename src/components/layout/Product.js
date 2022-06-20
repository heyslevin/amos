import {
  LinkBox,
  VStack,
  Image,
  Box,
  Text,
  LinkOverlay,
  Flex,
} from '@chakra-ui/react';

function Product({ productData }) {
  return (
    <LinkBox
      as={VStack}
      border="1px solid"
      borderColor="gray.200"
      p={3}
      rounded="lg"
      m="5px"
      flexBasis="calc(33.33333% - 10px)"
      boxSizing="border-box"
    >
      <Flex width={[280, 180, 280]} height={[280, 180, 280]} overflow="hidden">
        <Image
          mt={0}
          objectFit="cover"
          width="100%"
          src={
            productData.image ? productData.image : 'https://bit.ly/dan-abramov'
          }
        ></Image>
      </Flex>
      <Box align="center">
        <Text fontSize="sm">{productData.brand}</Text>
        <Text>{productData.name}</Text>
      </Box>
      <LinkOverlay mt="0 !important" p={0} href="www.firmalt.com" />
    </LinkBox>
  );
}

export default Product;
