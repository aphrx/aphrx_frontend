import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Flex,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const DrawerComponent = ({ isOpen, onClose, btnRef }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      zIndex="popover"
    >
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Aphrx</DrawerHeader>

        <DrawerBody>
          <Flex flexDirection="column">
            <RouterLink to="/" onClick={onClose}>Home</RouterLink>
            <br />
            <RouterLink to="/about" onClick={onClose}>About</RouterLink>
            <br />
            <RouterLink to="/products" onClick={onClose}>Products</RouterLink>
            <br />
            <RouterLink to="/converter" onClick={onClose}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Converter</RouterLink>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;