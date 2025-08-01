import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

// Import your at-rule global styles
import someGlobalStyles from "./styles/globalStyles";

const chakraContextValue = {
  _config: { disableLayers: false },
  layers: { atRule: someGlobalStyles },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ChakraProvider value={chakraContextValue}>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
);
