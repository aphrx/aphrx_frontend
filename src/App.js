import Footer from './components/Footer';
import Nav from './components/Nav';
import React, { useRef } from 'react';
import { useDisclosure, Flex } from '@chakra-ui/react';
import DrawerComponent from './components/DrawerComponent';
import Main from './Main';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Flex
    display={"flex"}
    minHeight="100vh"
    flexWrap={"nowrap"}
    justifyContent={"space-between"}

    flexDirection={'column'}>
      <Nav ref={btnRef} onOpen={onOpen} />
      <Main />
      <Footer />
      <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Flex>
  );
}

export default App;