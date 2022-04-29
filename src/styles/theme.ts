import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "400": "rgba(255, 186, 8, 0.5)",
      "500": "#FFBA08",
    },
    gray: {
      "100": "#F5F8FA",
      "200": "#DADADA",
      "300": "rgba(153, 153, 153, 0.5)",
      "400": "#999999",
      "700": "#47585B",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.700",
      },
    },
  },
});
