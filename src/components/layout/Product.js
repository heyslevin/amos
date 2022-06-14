import {
  LinkBox,
  VStack,
  Image,
  Box,
  Text,
  LinkOverlay,
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
      <Image
        mt={0}
        height="80%"
        objectFit="cover"
        src={
          productData.image ? productData.image : 'https://bit.ly/dan-abramov'
        }
      ></Image>
      <Box align="center">
        <Text fontSize="sm">{productData.brand}</Text>
        <Text>{productData.name}</Text>
      </Box>
      <LinkOverlay mt="0 !important" p={0} href="www.firmalt.com" />
    </LinkBox>
  );
}

export default Product;
