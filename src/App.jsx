import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./styles";
import { MainHero } from "./components/MainPage/MainHero/MainHero";
import { Services } from "./components/MainPage/Services/Services";

function App() {
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
        {/* <Services /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
