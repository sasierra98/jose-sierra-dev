
import { Box, Button, Fade, Grid, Slide, Typography, useTheme } from '@mui/material';
import MyImage from '../../assets/myphoto.png'
import MyImage2 from '../../assets/Group-20837.png';
import { useEffect, useState } from 'react';
import { NavBar } from '../NavBar/NavBar';

export const MainHero = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);

  useEffect(() => {setChecked(true)}, []);

  const appBarHeight = document.getElementById('app-bar')?.clientHeight;
  
  return (
    <Box component={"section"} 
      style={{
        // width: "100vw", 
        // height: `calc(100vh - ${appBarHeight}px)`, 
        height: '100%',
        // position: 'relative', 
        background: theme.palette.primary.main
      }}
      >
      {/* <NavBar />   */}
      <Grid className='flex text-left justify-center xl:px-40' container spacing={2} columns={{ sm: 12 }}> 
        <Grid className='w-full' item xs={8} sx={{ alignItems: 'center', display: 'flex'}}>
          <Box className='w-full break-words px-5'>
            <Fade in={checked} timeout={1000}>
              <Typography className='max-w-full break-words' variant='h1' fontWeight={'bold'} fontSize={'60px'} fontFamily={'Montserrat'}>
                Hi, I’am Jose.<br/> Fullstack Developer. 👋
              </Typography>
            </Fade>
            <Fade in={checked} timeout={1500}>
              <Typography className='py-7' fontSize={'16px'} fontFamily={'Montserrat'} >
                Varius amet, integer tellus non eget viverra. Ultrices tellus donec gravida <br/> id sed senectus dolor cursus sed. Ullamcorper tellus ac cras nec, pretium <br/> laoreet duis. 
              </Typography>
            </Fade>
            <Fade in={checked} timeout={2000}>
              <Button variant='contained' sx={{ 
                backgroundColor: theme.palette.secondary.main, 
                color: 'white', 
                '&:hover': { 
                  backgroundColor: theme.palette.secondary.main,
                  opacity: 0.9 
                }
              }} >
                Say Hello
              </Button>
            </Fade>
          </Box>
        </Grid>
        <Grid item xs={4} className='justify-center flex'>
          <Slide in={checked} direction='left' timeout={2000}>
            <img src={MyImage2} alt='' style={{ height:"auto" }} />
          </Slide>
        </Grid>
      </Grid>
    </Box>
  )
}