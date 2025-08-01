import React, { Component, useState } from "react";
import {
  Box,
  Heading,
  Button,
  Input,
  VStack,
  HStack,
  Text,
  Switch,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

// If you have a working custom useColorMode hook (for next-themes integration)
import { useColorMode } from "./hooks/useColorMode";

// ─────────────────────────────────────────────────────────────────────────────
// Error Boundary Component
// ─────────────────────────────────────────────────────────────────────────────
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error details to an external service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          p={6}
          bg="red.50"
          color="red.800"
          rounded="md"
          textAlign="center"
        >
          <Heading size="md" mb={2}>
            Something went wrong.
          </Heading>
          <Text>Please refresh the page or try again later.</Text>
        </Box>
      );
    }
    return this.props.children;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Main App Component
// ─────────────────────────────────────────────────────────────────────────────
function App() {
  // Dummy reminders data
  const [reminders, setReminders] = useState([
    { id: 1, medicine: "Paracetamol", time: "08:00 AM", taken: false },
    { id: 2, medicine: "Azithromycin", time: "11:00 AM", taken: true },
    { id: 3, medicine: "Vitamin C", time: "07:00 PM", taken: false },
  ]);

  // Prescription upload state
  const [prescriptions, setPrescriptions] = useState([]);
  const [uploadFile, setUploadFile] = useState(null);

  // Font size for accessibility
  const [fontSize, setFontSize] = useState(18);

  // High contrast mode toggle
  const [highContrast, setHighContrast] = useState(false);

  // Use your custom hook for color mode handling
  const { colorMode, toggleColorMode } = useColorMode();

  // Toggle reminder taken status
  const handleToggleTaken = (id) => {
    setReminders((r) =>
      r.map((item) => (item.id === id ? { ...item, taken: !item.taken } : item))
    );
  };

  // Delete a reminder
  const handleDeleteReminder = (id) => {
    setReminders((r) => r.filter((item) => item.id !== id));
  };

  // Handle file upload and preview URL update
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadFile(URL.createObjectURL(file));
      setPrescriptions((prev) => [...prev, file.name]);
    }
  };

  // Font size increment/decrement
  const increaseFont = () => setFontSize((s) => Math.min(s + 2, 30));
  const decreaseFont = () => setFontSize((s) => Math.max(s - 2, 12));

  // Toggle high contrast mode
  const toggleHighContrast = () => setHighContrast((v) => !v);

  // Responsive backgrounds and colors
  const containerBg = highContrast
    ? "black"
    : colorMode === "light"
    ? "linear-gradient(to bottom right, #B2F5EA, #BEE3F8)"
    : "linear-gradient(to bottom right, #2D3748, #1A202C)";

  const containerColor = highContrast
    ? "white"
    : colorMode === "light"
    ? "black"
    : "white";

  return (
    <ErrorBoundary>
      <Box
        as="main"
        minHeight="100vh"
        p={{ base: 4, md: 8 }}
        fontSize={fontSize}
        style={{ background: containerBg }}
        color={containerColor}
        transition="background 0.3s ease, color 0.3s ease"
      >
        {/* Header */}
        <Box as="header">
          <HStack justify="space-between" mb={6}>
            <Heading as="h1" size="lg">
              Prescription & Medicine Tracker
            </Heading>
            <HStack spacing={4}>
              <Button onClick={decreaseFont} size="sm" aria-label="Decrease font size">
                A-
              </Button>
              <Button onClick={increaseFont} size="sm" aria-label="Increase font size">
                A+
              </Button>
              <Switch
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
                aria-label="Toggle dark mode"
              />
              <Switch
                isChecked={highContrast}
                onChange={toggleHighContrast}
                aria-label="Toggle high contrast mode"
              />
            </HStack>
          </HStack>
        </Box>

        {/* Prescription Upload Section */}
        <Box
          as="section"
          aria-labelledby="upload-heading"
          mb={8}
          p={4}
          bg="white"
          _dark={{ bg: "gray.700" }}
          rounded="lg"
          shadow="md"
        >
          <Heading as="h2" id="upload-heading" size="md" mb={2}>
            Upload Prescription
          </Heading>
          <Input
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileChange}
            mb={2}
            aria-label="Upload prescription file"
          />
          {uploadFile && (
            <Box mt={2}>
              <Text fontSize="sm" mb={1}>
                Preview:
              </Text>
              {(uploadFile.startsWith("blob:") ||
                uploadFile.endsWith(".jpg") ||
                uploadFile.endsWith(".jpeg") ||
                uploadFile.endsWith(".png") ||
                uploadFile.endsWith(".gif")) && (
                <img
                  src={uploadFile}
                  alt="Prescription Preview"
                  style={{
                    maxHeight: 100,
                    borderRadius: 8,
                    objectFit: "contain",
                  }}
                />
              )}
            </Box>
          )}
          {prescriptions.length > 0 && (
            <Text fontSize="sm" color="gray.500" mt={2}>
              Uploaded Files: {prescriptions.join(", ")}
            </Text>
          )}
        </Box>

        {/* Reminders Section */}
        <Box
          as="section"
          aria-labelledby="reminders-heading"
          mb={8}
          p={4}
          bg="white"
          _dark={{ bg: "gray.700" }}
          rounded="lg"
          shadow="md"
        >
          <Heading as="h2" id="reminders-heading" size="md" mb={2}>
            Reminders
          </Heading>
          <VStack align="stretch" spacing={3}>
            {reminders.length === 0 ? (
              <Text color="gray.400">No reminders added yet.</Text>
            ) : (
              reminders.map((r) => (
                <HStack
                  key={r.id}
                  justify="space-between"
                  bg={r.taken ? "#E6FFFA" : "#FFF5F5"}
                  _dark={{ bg: r.taken ? "#234E52" : "#742A2A" }}
                  p={2}
                  rounded="md"
                  border="1px solid"
                  borderColor={r.taken ? "#81E6D9" : "#FEB2B2"}
                  as="section"
                  aria-label={`${r.medicine} reminder`}
                >
                  <Text>
                    {r.medicine} - {r.time}
                  </Text>
                  <HStack>
                    <Button
                      colorScheme={r.taken ? "green" : "red"}
                      size="sm"
                      onClick={() => handleToggleTaken(r.id)}
                      aria-label={
                        r.taken
                          ? `Mark ${r.medicine} as not taken`
                          : `Mark ${r.medicine} as taken`
                      }
                    >
                      {r.taken ? "Taken" : "Mark as Taken"}
                    </Button>
                    <Button
                      colorScheme="gray"
                      size="sm"
                      onClick={() => handleDeleteReminder(r.id)}
                      aria-label={`Delete reminder for ${r.medicine}`}
                    >
                      Delete
                    </Button>
                  </HStack>
                </HStack>
              ))
            )}
          </VStack>
        </Box>

        {/* About Section */}
        <Box
          as="section"
          aria-labelledby="about-heading"
          p={4}
          bg="white"
          _dark={{ bg: "gray.700" }}
          rounded="lg"
          shadow="md"
        >
          <Heading as="h3" id="about-heading" size="md" mb={2}>
            About Me
          </Heading>
          <Text mb={2}>
            Hey there, Shivam this side. This is my first project a responsible website using React & JavaScript.
          </Text>
          <Heading as="h4" size="sm" mb={1} id="future-features-heading">
            Future Features
          </Heading>
          <VStack
            align="start"
            spacing={1}
            fontSize="sm"
            as="ul"
            aria-labelledby="future-features-heading"
          >
            <Text as="li">AI pill identifier using camera</Text>
            <Text as="li">Family mode and caregiver notifications</Text>
            <Text as="li">Integration with smartwatches & pharmacy delivery</Text>
          </VStack>
        </Box>

        {/* Footer */}
        <Box
          as="footer"
          mt={8}
          pt={6}
          textAlign="center"
          fontSize="sm"
          color={useColorModeValue("gray.500", "gray.400")}
        >
          &copy; {new Date().getFullYear()} Medicine Tracker &mdash; Made by Shivam Mishra
        </Box>
      </Box>
    </ErrorBoundary>
  );
}

export default App;
