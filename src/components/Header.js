import React from 'react';
import { Box, Heading, Button, Flex, HStack } from '@chakra-ui/react';
import { useColorMode } from '../hooks/useColorMode'; // your custom hook
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';

const MotionBox = motion(Box);

export default function Header({ 
  fontSize, 
  increaseFont, 
  decreaseFont, 
  highContrast, 
  toggleHighContrast 
}) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <MotionBox
      as="header"
      p={4}
      mb={6}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Box w="60px" h="60px" mr={3}>
            <Lottie animationData={animationData} loop={true} />
          </Box>
          <Heading size="lg" fontSize={fontSize}>
            Prescription & Medicine Tracker
          </Heading>
        </Flex>

        <HStack spacing={3}>
          {/* Font size controls */}
          <Button 
            onClick={decreaseFont} 
            size="sm" 
            aria-label="Decrease font size"
            title="Decrease font size"
          >
            A-
          </Button>
          <Button 
            onClick={increaseFont} 
            size="sm" 
            aria-label="Increase font size"
            title="Increase font size"
          >
            A+
          </Button>

          {/* Dark/Light mode toggle */}
          <Button 
            onClick={toggleColorMode} 
            size="sm"
            aria-label={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
          >
            {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>

          {/* High contrast mode toggle */}
          <Button 
            onClick={toggleHighContrast} 
            size="sm"
            aria-label={highContrast ? 'Disable high contrast mode' : 'Enable high contrast mode'}
            title={highContrast ? 'Disable high contrast mode' : 'Enable high contrast mode'}
          >
            {highContrast ? 'Normal Contrast' : 'High Contrast'}
          </Button>
        </HStack>
      </Flex>
    </MotionBox>
  );
}
