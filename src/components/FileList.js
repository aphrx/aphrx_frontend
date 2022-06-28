import { Flex, IconButton, Text } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

import React from "react";
import PopoverButton from "./PopoverButton";

const FileList = ({ file }) => {
  const openTab = () => {
    window.open(file.link, "_blank");
  };

  return (
    <>
      <Flex
        bg="#fafafa"
        w={"5xl"}
        p="4"
        margin={5}
        alignItems="center"
        justifyContent={"space-between"}
        borderRadius="md"
        flexDirection="row"
        textAlign="left"
        border="1px solid #eeeeee"
      >
        <Text align={"left"}>{file.path}</Text>
        <div>
          {
            // <IconButton w={6} h={6} p={5} onClick={openTab}>
            //   <DownloadIcon />
            // </IconButton>
            <PopoverButton file={file}/>
          }
        </div>
      </Flex>
    </>
  );
};

export default FileList;
