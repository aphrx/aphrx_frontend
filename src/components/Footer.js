import { Flex, Text, Link } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      w="full"
      bg="blackAlpha.50"
      minHeight="12vh"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      // position= "static"
      bottom={0}
      
    >
      <Text mb="3">
      Copyright © 2022. All Rights Reserved.

      </Text>
      <Text opacity="0.5">Made by Aphrx. Designed by {' '} 
              <Link href="https://appseed.us" isExternal color="blue.500">
          AppSeed
        </Link>.
        </Text>
    </Flex>
  );
};

export default Footer;