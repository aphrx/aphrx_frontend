import React from "react";
import { Box, Text } from "@chakra-ui/react";
import FileUpload from "../components/FileUpload";

function Hoster() {
  return (
    <Box align={"center"} paddingBottom={10}>
      <Text fontSize={"5xl"} fontWeight="bold" p={6} mb="4" align={"center"}>
        {"Convert your files"}
      </Text>
      <FileUpload />
    </Box>
  );
}

export default Hoster;
