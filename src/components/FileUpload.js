import { Flex } from "@chakra-ui/react";
import React, { useMemo, useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import FileList from "./FileList";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10vh",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const FileUpload = ({ api_url }) => {
  
  const [fileList, setFileList] = useState([])

  const onDrop = useCallback(async (acceptedFiles) => {
      const acceptedFileItems = acceptedFiles.map((file) => (
        <FileList key={file.path} file={file} />
      ));
      console.log(fileList)
      setFileList([...fileList, acceptedFileItems])

    // });
  }, []);

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: { "image/*": [] }, onDrop });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div>
      <Flex
        alignItems="center"
        w="5xl"
        minHeight="10vh"
        justifyContent="space-between"
      >
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </Flex>
      <div>
        <ul>{fileList}</ul>
      </div>
    </div>
  );
};

export default FileUpload;
