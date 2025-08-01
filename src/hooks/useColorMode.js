import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useColorMode() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Decide final theme
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Toggle function
  const toggleColorMode = () => {
    if (!mounted) return;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return {
    colorMode: mounted ? currentTheme : "light", // Prevent hydration mismatch by defaulting to light
    toggleColorMode,
  };
}
