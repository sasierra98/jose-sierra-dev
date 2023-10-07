import { 
  Box, 
  ThemeProvider,
  Grid,
  Typography,
  useMediaQuery
} from "@mui/material";

import { theme } from "../../styles";
import { NavBar } from "../../components/NavBar/NavBar";
import { MainHero } from "../../components/MainPage/MainHero";
import { Services } from "../../components/MainPage/Services";
import { Carrousel } from "../../components/Carrousel";
import { homeInfo } from "./homeInfo";

import "./style.css";
import { useTheme } from "@emotion/react";
import { WorkingExperience } from "../../components/MainPage/WorkingExperience";

export const MainPage = () => {
  // const theme = useTheme();
  const {carrouselInfo} = homeInfo();
  // const matches = useMediaQuery();
  
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
        
        <Box className="my-20" component={"section"}>
          <Carrousel data={carrouselInfo} />
        </Box>
        
        <Services />
        <WorkingExperience />
      </Box>
    </ThemeProvider>
  );
};
