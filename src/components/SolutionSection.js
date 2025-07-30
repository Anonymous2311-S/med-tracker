import React from 'react';
import { Box, Text, Heading, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';

const MotionBox = motion(Box);

export default function SolutionSection() {
  return (
    <MotionBox
      mb={6}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Box w={{ base: '100%', md: '70%' }} p={{ base: 2, md: 6 }} mx="auto">
        <Flex alignItems="center" flexDirection={{ base: 'column', md: 'row-reverse' }}>
          <Box w={{ base: '80%', md: '40%' }} mb={{ base: 6, md: 0 }} ml={{ md: 6 }}>
            <Lottie animationData={animationData} loop={true} style={{ width: '100%', height: 'auto' }} />
          </Box>
          <Box w={{ base: '90%', md: '60%' }}>
            <Heading size="md" mb={2}>Our Solution</Heading>
            <Text>
              This tool makes medicine tracking simple: upload prescriptions, get reminders, see refills,
              and even simulate pharmacy ordering. Designed for ease and calmness.
            </Text>
          </Box>
        </Flex>
      </Box>
    </MotionBox>
  );
}
