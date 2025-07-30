import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  Input,
  Text,
  Image,
  VStack,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/toast';  // Note: from @chakra-ui/toast in Chakra v3+
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';

const MotionBox = motion(Box);

export default function PrescriptionUpload() {
  const [file, setFile] = useState(null);
  const fileInput = useRef();
  const toast = useToast();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0] || null;
    setFile(selectedFile);

    if (selectedFile) {
      toast({
        title: 'Uploaded!',
        description: `${selectedFile.name} uploaded successfully.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  return (
    <MotionBox
      mb={6}
      w={{ base: '95%', md: '60%' }}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      mx="auto"
    >
      <Text fontWeight="bold" mb={4}>
        Upload your Prescription
      </Text>

      <VStack spacing={4} align="start">
        {/* Lottie animation */}
        <Box w="100%" maxW="300px">
          <Lottie animationData={animationData} loop={true} />
        </Box>

        {/* Hidden file input */}
        <Input
          ref={fileInput}
          type="file"
          accept="image/*,application/pdf"
          display="none"
          onChange={handleFileChange}
        />

        {/* Styled button to open file dialog */}
        <Button
          bg="teal.500"
          _hover={{ bg: 'teal.600' }}
          _focus={{ boxShadow: 'outline' }}
          color="white"
          onClick={() => fileInput.current.click()}
        >
          Choose File
        </Button>

        {/* Display file name and image preview if applicable */}
        {file && (
          <Box>
            <Text>Selected: {file.name}</Text>
            {file.type?.startsWith('image/') && (
              <Image
                src={URL.createObjectURL(file)}
                alt="Prescription preview"
                maxW="200px"
                mt={2}
                borderRadius="md"
                boxShadow="md"
              />
            )}
          </Box>
        )}
      </VStack>
    </MotionBox>
  );
}
