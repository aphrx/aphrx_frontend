import React, { useState } from "react";
import {
  Text,
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue,
  Container
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaAlignJustify } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

const Nav = ({ onOpen, ref }) => {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue("white", "blackAlpha.200");

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  return (
    <Flex 
    bg={navBg}>
    <Container
    alignItems="center"
    maxW='container.lg'>
    <Flex
      h="10vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? "base" : "none"}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
      // 
      
    >

      <Text fontSize="xl" fontWeight="bold">
        Aphrx
      </Text>

      <Spacer />

      <Flex alignItems="center">
        <IconButton mr="10" w={6} h={6} p={5} onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </IconButton>

        <IconButton ref={ref} onClick={onOpen}>
          <Icon as={FaAlignJustify} />
        </IconButton>
      </Flex>
    </Flex>
    </Container>
    </Flex>
  );
};

export default Nav;
