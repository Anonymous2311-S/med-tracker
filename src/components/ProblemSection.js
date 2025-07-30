import React from 'react';
import { Box, Text, Heading, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';

const MotionBox = motion(Box);

export default function ProblemSection() {
  return (
    <MotionBox
      mb={6}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Box w={{ base: '100%', md: '70%' }} p={{ base: 2, md: 6 }} mx="auto">
        <Flex alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
          <Box w={{ base: '80%', md: '40%' }} mb={{ base: 6, md: 0 }} mr={{ md: 6 }}>
            <Lottie animationData={animationData} loop={true} style={{ width: '100%', height: 'auto' }} />
          </Box>
          <Box w={{ base: '90%', md: '60%' }}>
            <Heading size="md" mb={2}>The Problem</Heading>
            <Text>
              Remembering medicines is tough and missing doses is risky.
              Many patients and families do not have easy ways to track refills or set up reliable reminders.
            </Text>
          </Box>
        </Flex>
      </Box>
    </MotionBox>
  );
}
