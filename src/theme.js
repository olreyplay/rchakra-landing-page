import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: "#2f6bff" },
          600: { value: "#1f52db" },
          700: { value: "#163caf" },
        },
      },
      fonts: {
        heading: {
          value:
            "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        },
        body: {
          value:
            "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        },
      },
    },
  },
});
