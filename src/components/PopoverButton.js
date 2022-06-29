import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  IconButton,
  Select,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { DownloadIcon } from "@chakra-ui/icons";

const PopoverButton = ({ file }) => {
  const [value, setValue] = useState("JPEG");

  const convert = async () => {
    console.log(file);
    try {
      const formData = new FormData();
      console.log(file);
      formData.append("blob", file);
      let res = await fetch(
        "http://localhost:8000/api/v1/convert?sink=" + value,
        {
          method: "POST",
          body: formData,
          responseType: "blob",
        }
      )
        .then((response) => response.blob())
        .then((blob) => {
          var url = window.URL.createObjectURL(blob);
          var a = document.createElement("a");
          a.href = url;
          a.download = "download." + value.toLowerCase();
          document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
          a.click();
          a.remove(); //afterwards we remove the element again
        });
      let data = await res.json();
    } catch (e) {
      return e;
    }
  };

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <IconButton w={6} h={6} p={5}>
            <DownloadIcon />
          </IconButton>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader
            pt={4}
            fontWeight="bold"
            border="0"
            alignSelf={"center"}
          >
            Download File As
          </PopoverHeader>
          <PopoverArrow />
          <PopoverBody>
            <Select
              onChange={(event) => {
                setValue(event.target.value);
              }}
              value={value}
            >
              <option value="JPEG">JPG</option>
              <option value="PNG">PNG</option>
            </Select>
            <Box p={1}></Box>
            <Button variant="outline" width="full" onClick={convert}>
              Download
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PopoverButton;
