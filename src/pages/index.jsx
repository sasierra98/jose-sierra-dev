import { Box, ThemeProvider } from "@mui/material";

import { theme } from "../styles";
import { NavBar } from "../components/NavBar/NavBar";
import { MainHero } from "../components/MainPage/MainHero/MainHero";
import { Services } from "../components/MainPage/Services/Services";

export const MainPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <header>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat"
          />
        </header>
        <NavBar />
        <MainHero />
        <Services />
      </Box>
    </ThemeProvider>
  );
};
