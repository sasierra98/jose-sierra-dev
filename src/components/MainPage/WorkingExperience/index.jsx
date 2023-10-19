import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Sofisis from '../../../assets/workExperience/sofisis.png'
import { useTheme } from "@mui/material";
import { workingExperienceInfo } from "./workingExperienceInfo";

export const WorkingExperience = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  console.log(matches)

  return (
    <Box component={"section"} className="xs:px-10 md:px-20 xs:my-20">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box
          subtitle
            className={`flex flex-col justify-center bg-[#151E2C] rounded-2xl xs:p-8 h-full`}
          >
            <Box className="w-full flex justify-end">
              <Box className="circle"></Box>
            </Box>

            <Typography component={"div"} color={"white"} variant="h2">
              Working experience
            </Typography>
            <Typography
              component={"div"}
              variant="body2"
              color={"#FFFFFF40"}
              lineHeight={"28px"}
              fontSize={"12px"}
            >
              Tincidunt purus lacus nascetur nunc commodo. Netus at dignissim
              urna quam. Imperdiet proin sapien posuere egestas. Tristique nam
              magna velit odio ullamcorper eget donec.
            </Typography>

            <Box className="flex flex-row justify-center align-middle items-center">
              
              {matches && (
                <>
                  <Box className="divider-line"></Box>
                  <Box className="divider-circle flex items-center justify-center text-center">
                    <Box className="circle-center flex items-center justify-center text-center"></Box>
                  </Box>
                </>
              )}
            </Box>

            <Box className="arc" ></Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <>
            <Box className="space-y-6">
              {workingExperienceInfo.map((workingExperience, i) => (
                <Grid container className="rounded-[10px] border border-[#E7E7E7] w-full items-center py-5">
                  <Grid item xs={2} className="flex justify-center">
                    <img src={workingExperience.logo} width={"58px"} height={"58px"} alt=""></img>
                  </Grid>
                  <Grid item xs={10}>
                    <Box>
                      <Typography variant="h4">{workingExperience.title}</Typography>
                      <Typography variant="h5">{workingExperience.position}</Typography>
                      <Typography variant="h5">{workingExperience.term}</Typography>
                    </Box>
                  </Grid>
              </Grid>
              ))}
            </Box>
          </>
        </Grid>
      </Grid>
    </Box>
  );
};
