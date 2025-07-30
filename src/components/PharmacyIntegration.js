import React from 'react';
import {
  Box,
  Button,
  Text,
  useDisclosure,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
  CloseButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';

const MotionBox = motion(Box);

export default function PharmacyIntegration() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <MotionBox
      mb={6}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      w={{ base: '95%', md: '70%' }}
      mx="auto"
    >
      <Text fontWeight="bold" mb={2}>Order Medicine</Text>

      <Button colorScheme="teal" onClick={onOpen}>
        Simulate Pharmacy Order
      </Button>

      <Dialog isOpen={isOpen} onClose={onClose}>
        <DialogTrigger />
        <DialogContent>
          <DialogHeader>
            Order Sent!
            <CloseButton position="absolute" top="8px" right="8px" onClick={onClose} />
          </DialogHeader>
          <DialogBody>
            <Box w="150px" h="150px" mb={4}>
              <Lottie animationData={animationData} loop={false} />
            </Box>
            Order simulated for demo purposes.<br/>
            <Button
              mt={4}
              colorScheme="blue"
              as="a"
              href="https://www.1mg.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to 1mg
            </Button>
          </DialogBody>
        </DialogContent>
      </Dialog>
    </MotionBox>
  );
}
