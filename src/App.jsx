import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Box, ThemeProvider} from '@mui/material';
import { theme } from './styles';
import { MainHero } from './components/MainHero/MainHero';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Box>
      <header>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
      </header>
      <NavBar />
      <MainHero />
      <Box component={"section"}>

      </Box>
    </Box>
    </ThemeProvider>
  )
}

export default App;
