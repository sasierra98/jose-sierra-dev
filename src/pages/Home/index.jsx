import { Box, ThemeProvider } from "@mui/material";

import { theme } from "../../styles";
import { NavBar } from "../../components/NavBar/NavBar";
import { MainHero } from "../../components/MainPage/MainHero";
import { Services } from "../../components/MainPage/Services";
import { Carrousel } from "../../components/Carrousel";
import { homeInfo } from "./homeInfo";

export const MainPage = () => {
  const {carrouselInfo} = homeInfo();
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
        <Carrousel data={carrouselInfo} />
      </Box>
    </ThemeProvider>
  );
};
