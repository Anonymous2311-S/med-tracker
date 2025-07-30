import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import system from './theme';   // import your custom theme

import Header from './components/Header';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import PrescriptionUpload from './components/PrescriptionUpload';
import Reminders from './components/Reminders';
import PharmacyIntegration from './components/PharmacyIntegration';

import './App.css';

export default function App() {
  return (
    <ChakraProvider value={system}> 
      <div className="App">
        <Header />
        <ProblemSection />
        <SolutionSection />
        <PrescriptionUpload />
        <Reminders />
        <PharmacyIntegration />
      </div>
    </ChakraProvider>
  );
}
