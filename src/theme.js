// src/theme.js
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50:  "#e3f8fa",
          100: "#c1edf1",
          200: "#9fe1ea",
          300: "#7cd6e4",
          400: "#59cadc",
          500: "#37bed4",   // Calm medical teal/mint
          600: "#2595a6",
          700: "#17687a",
          800: "#09394c",
          900: "#00121f",
        },
        accentTeal: { value: "#437acdff" },
        accentGreen: { value: "#48bb78" },
        primaryBlue: { value: "#4fd1c5" },
        alertRed: { value: "#f56565" },
      },
      fonts: {
        heading: { value: "'Nunito', 'Inter', sans-serif" },
        body: { value: "'Inter', 'Nunito', sans-serif" },
      },
    },
    layerStyles: {
      card: {
        bg: { value: "brand.50" },
        borderRadius: { value: "12px" },
        boxShadow: { value: "0 4px 20px rgba(56,178,172,0.08)" },
        padding: { value: "24px" },
      },
    },
    textStyles: {
      sectionTitle: {
        fontFamily: { value: "Nunito, Inter, sans-serif" },
        fontWeight: { value: "700" },
        letterSpacing: { value: "0.05em" },
        color: { value: "brand.700" },
        fontSize: { base: { value: "1.4rem" }, md: { value: "1.8rem" } },
        marginBottom: { value: "0.5rem" },
      },
      normal: {
        fontFamily: { value: "Inter, Nunito, sans-serif" },
        fontWeight: { value: "400" },
        color: { value: "brand.900" },
      },
    },
    styles: {
      global: {
        "html, body": {
          background: {
            value:
              "linear-gradient(135deg, #e3f8fa 0%, #f0fff0 100%)",
          },
          color: { value: "brand.900" },
          fontFamily: { value: "Inter, Nunito, sans-serif" },
          margin: { value: "0" },
          padding: { value: "0" },
          height: { value: "100%" },
          width: { value: "100%" },
        },
        ".chakra-button": {
          fontWeight: { value: "600" },
          boxShadow: { value: "0 2px 12px rgba(56,178,172,0.10)" },
          borderRadius: { value: "7px" },
        },
      },
    },
    components: {
      Button: {
        baseStyle: {
          borderRadius: { value: "7px" },
        },
        variants: {
          solid: {
            bg: { value: "brand.500" },
            color: { value: "white" },
            _hover: {
              bg: { value: "brand.600" },
              boxShadow: { value: "md" },
            },
          },
          outline: {
            borderColor: { value: "brand.500" },
            color: { value: "brand.500" },
            _hover: {
              bg: { value: "brand.50" },
            },
          },
        },
      },
      Badge: {
        baseStyle: {
          borderRadius: { value: "6px" },
          paddingX: { value: "0.5rem" },
        },
        sizes: {
          md: {
            fontSize: { value: "0.95rem" },
          },
        },
      },
      Input: {
        baseStyle: {
          borderRadius: { value: "7px" },
          borderColor: { value: "brand.200" },
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
