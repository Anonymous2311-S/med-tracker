import React from 'react';
import { Box, SimpleGrid, Text, Badge, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';

const MotionBox = motion(Box);

const reminders = [
  { name: 'Amoxycillin', time: '8:00 AM', status: 'Pending' },
  { name: 'Metformin', time: '2:00 PM', status: 'Completed' },
  { name: 'Vitamin D', time: '6:30 PM', status: 'Pending' },
];

export default function Reminders() {
  return (
    <MotionBox
      mb={6}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      w={{ base: '95%', md: '70%' }}
      mx="auto"
    >
      <Text fontWeight="bold" fontSize="lg" mb={4}>Reminders</Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {reminders.map((rem, idx) => (
          <Box
            key={idx}
            p={4}
            bg="blue.50"
            borderRadius="md"
            boxShadow="sm"
          >
            <VStack align="start" spacing={1}>
              <Text fontWeight="semibold" fontSize="md">{rem.name}</Text>
              <Text fontSize="sm" color="gray.600">{rem.time}</Text>
              <Badge colorScheme={rem.status === 'Completed' ? 'green' : 'orange'}>{rem.status}</Badge>

              {rem.status === 'Completed' && (
                <Box w="50px" h="50px" mt={2}>
                  <Lottie animationData={animationData} loop={false} />
                </Box>
              )}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
}
