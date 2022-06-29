import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import PopoverButton from "./PopoverButton";

const FileList = ({ file }) => {
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
          <PopoverButton file={file} />
        </div>
      </Flex>
    </>
  );
};

export default FileList;
