import {
  Box,
  Container,
  Flex,
  Img,
  Spacer,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';

const Hero = ({ title, body, image}) => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  return (
    <Container
    alignItems="center"
    maxW='container.xl'
    >
    <Flex
      alignItems="center"
      w="full"
      px={isLargerThanLG ? '16' : '6'}
      py="16"
      minHeight="90vh"
      justifyContent="space-between"
      flexDirection={isLargerThanLG ? 'row' : 'column'}
    >
      <Box mr={isLargerThanLG ? '6' : '0'} w={isLargerThanLG ? '60%' : 'full'} align={isLargerThanLG ? 'left':'center'}>
        <Text
          fontSize={isLargerThanLG ? '5xl' : '4xl'}
          fontWeight="bold"
          mb="4"
        >
          { title }
        </Text>

        <Text mb="6" fontSize={isLargerThanLG ? 'lg' : 'base'} opacity={0.7}>
          { body } 
        </Text>

        {/* <Button
          w="200px"
          colorScheme="blue"
          variant="solid"
          h="50px"
          size={isLargerThanLG ? 'lg' : 'md'}
          mb={isLargerThanLG ? '0' : '10'}
          onClick={(e) => {
            e.preventDefault();
            window.location.href='https://blog.appseed.us/chakra-ui-react-coding-landing-page/';
            }}
        >
          Read More
        </Button> */}
      </Box>
      <Spacer />
      <Flex
        w={isLargerThanLG ? '40%' : 'full'}
        alignItems="center"
        justifyContent="center"
      >
        <Img src={image} alt="Chakra UI"/>
      </Flex>
    </Flex>
    </Container>
  );
};

export default Hero;