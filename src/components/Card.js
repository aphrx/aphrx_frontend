import { Container, Flex, Spacer, Text, useMediaQuery } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import React from 'react';

const Card = ({ data, title }) => {
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');

  return (
    <Container
    alignItems="center"
    maxW='container.xl'
    minH="70vh"
    >
      <Text
          fontSize={isLargerThanMD ? '5xl' : '4xl'}
          fontWeight="bold"
          align={"center"}
          mb="4"
        >
          { title }
        </Text>
    <Flex
      alignItems="center"
      justifyContent="space-between"
      w="full"
      py="16"
      px={isLargerThanMD ? '16' : '6'}
      flexWrap="wrap"
      flexDirection={isLargerThanMD ? 'row' : 'column'}
    >
      {data.map((card) => (
        <>
          <Flex
            height="300px"
            bg="blackAlpha.200"
            width={isLargerThanMD ? '32%' : 'full'}
            // shadow="md"
            p="6"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            flexDirection="column"
            textAlign="center"
            mb={isLargerThanMD ? '0' : '4'}
            // border="1px solid #C4DDFF"
          >
            <Icon as={card.icon} boxSize={14} color="blue.600" mb="5" />
            <Text><b>{card.title}</b></Text>
            <Text>{card.text}</Text>
          </Flex>

          <Spacer />
        </>
      ))}
    </Flex>
    </Container>
  );
};

export default Card;