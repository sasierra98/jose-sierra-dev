
import { Box, Button, Grid, Typography } from '@mui/material';
import MyImage from '../../assets/myphoto.png'

export const MainHero = () => {
  return (
    <Box component={"section"} 
      style={{
        // width: "100vw", 
        // height: "100vh", 
        // position: 'relative', 
        background: '#EEF2E5'
      }}
      >
      <Grid className='flex text-left justify-center xl:px-40' container spacing={2} columns={{ sm: 12 }}> 
        <Grid className='w-full' item xs={8} sx={{ alignItems: 'center', display: 'flex'}}>
          <Box className='w-full break-words px-5'>
            <Typography className='max-w-full break-words' variant='h1' fontWeight={'bold'} fontSize={'60px'} fontFamily={'Montserrat'}>
              Hi, I’am Jose.<br/> Fullstack Developer. 👋
            </Typography>
            <Typography className='py-7' fontSize={'16px'} fontFamily={'Montserrat'} >
              Varius amet, integer tellus non eget viverra. Ultrices tellus donec gravida <br/> id sed senectus dolor cursus sed. Ullamcorper tellus ac cras nec, pretium <br/> laoreet duis. 
            </Typography>
            <Button variant='contained' >
              Say Hello
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4} className='justify-center flex'>
          <img src={MyImage} alt='' style={{ height:"450px" }} />
        </Grid>
      </Grid>
    </Box>
  )
}