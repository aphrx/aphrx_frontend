import {
  Flex,
  Spacer,
  Image,
  Text,
  Button,
  useMediaQuery,
  Container,
} from '@chakra-ui/react';
import React from 'react';
import teamImage from '../assets/serviceImage.jpg';

const Services = () => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

  return (
    <Container
    alignItems="center"
    maxW='container.xl'>
    <Flex
      width="full"
      minHeight="70vh"
      alignItems="center"
      px={isLargerThanLG ? '16' : '6'}
      py="16"
      justifyContent="center"
      flexDirection={isLargerThanLG ? 'row' : 'column'}
    >
      <Flex
        w={isLargerThanLG ? '40%' : 'full'}
        mb={isLargerThanLG ? '0' : '6'}
        alignItems="center"
        justifyContent="center"
      >
        <Image src={teamImage} alt="Chakra Team" w="full" />
      </Flex>
      <Spacer />
      <Flex
        w={isLargerThanLG ? '60%' : 'full'}
        flexDirection="column"
        ml={isLargerThanLG ? '7' : '0'}
        align={isLargerThanLG ? 'left' : 'center'}
      >
        <Text fontSize={isLargerThanLG ? '5xl' : '4xl'} fontWeight="bold" >
          Build Optimal Solutions
        </Text>

        <Text mb="6" opacity="0.8">
          Here at Aphrx, we try to solve the problems that no one else is focused on. Have a niche problem that could be easily automated or improved? We would love to hear from you. Let us know!
        </Text>

        <Button width="200px" size="lg" colorScheme="blue">
          CONTACT US
        </Button>
      </Flex>
    </Flex>
    </Container>
  );
};

export default Services;