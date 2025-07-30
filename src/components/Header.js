import React from 'react';
import { Box, Heading, Button, Flex } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';

const MotionBox = motion(Box);

export default function Header() {
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
          <Heading size="lg">Prescription & Medicine Tracker</Heading>
        </Flex>

        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Flex>
    </MotionBox>
  );
}
