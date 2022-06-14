import React from 'react';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Center, useColorModeValue, Icon } from '@chakra-ui/react';
import { AiFillFileAdd } from 'react-icons/ai';

import { uploadFromBlobAsync } from '../../utils/storage';

export default function Dropzone({ setFile, file, uploadSuccess }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: useCallback(
      async acceptedFiles => {
        const file = acceptedFiles?.[0];
        setFile(file);
      },
      [setFile]
    ),
    accept: { 'image/jpeg': [], 'image/png': [] },
    maxFiles: 1,
    multiple: false,
  });

  const dropText = (
    <React.Fragment>
      <Icon as={AiFillFileAdd} mr={2} />
      {isDragActive
        ? 'Drop the files here ...'
        : "Drag 'n' drop your image here, or click to select files"}
    </React.Fragment>
  );

  const activeBg = useColorModeValue('gray.100', 'gray.600');
  const borderColor = useColorModeValue(
    isDragActive ? 'teal.300' : 'gray.300',
    isDragActive ? 'teal.500' : 'gray.500'
  );

  return (
    <Center
      p={10}
      cursor="pointer"
      bg={isDragActive ? activeBg : 'transparent'}
      _hover={{ bg: activeBg }}
      transition="background-color 0.2s ease"
      borderRadius={4}
      border="3px dashed"
      borderColor={borderColor}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <p>{file ? file.name : dropText}</p>
    </Center>
  );
}
