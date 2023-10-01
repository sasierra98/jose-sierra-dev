import { createTheme } from "@mui/material";

export const palette = {
  primary: {
    main: "#F6F6F6",
    dark: "#CCCCCC",
    darker: "#8D9E8D",
  },
  secondary: {
    main: "#0252CD",
  },
  common: {
    white: "#ffffff"
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  palette: palette,
});
