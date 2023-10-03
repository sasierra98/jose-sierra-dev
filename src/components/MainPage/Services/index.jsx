import {
  Box,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { FaPython, FaReact, FaMobile, FaBuffer } from "react-icons/fa6";
import { CustomCard } from "../../Card";

export const Services = () => {
  const theme = useTheme();

  const servicesInfo = [
    {
      icon: (
        <FaPython
          className="python-logo"
          style={{
            height: "24px",
            width: "24px",
            color: theme.palette.primary.main,
          }}
        />
      ),
      title: "Backend Development",
      text: "As a backend developer, my main focus is to create the solid infrastructure that makes it possible for web applications to run efficiently and securely.",
      items: [
        "Customized APIs",
        "Database Management",
        "Security",
        "Performance Optimization",
        "Third Party Integrations",
      ],
    },
    {
      icon: (
        <FaReact
          className="python-logo"
          style={{
            height: "24px",
            width: "24px",
            color: theme.palette.primary.main,
          }}
        />
      ),
      title: "Frontend Development",
      text: "As a frontend develoer, I specialise in creating captivating and functional user interfaces for websites and web applications.",
    },
    {
      icon: (
        <FaMobile
          className="python-logo"
          style={{
            height: "24px",
            width: "24px",
            color: theme.palette.primary.main,
          }}
        />
      ),
      title: "Mobile Development",
      text: "As a frontend develoer, I specialise in creating captivating and functional user interfaces for websites and web applications.",
    },
    {
      icon: (
        <FaBuffer
          className="python-logo"
          style={{
            height: "24px",
            width: "24px",
            color: theme.palette.primary.main,
          }}
        />
      ),
      title: "Web Integration",
      text: "As a frontend develoer, I specialise in creating captivating and functional user interfaces for websites and web applications.",
    },
  ];

  return (
    // theme.palette.primary
    <Box
      component={"section"}
      className={`h-screen mx-10`}
      bgcolor={theme.palette.common.white}
    >
      <Typography className="py-20" component={'div'} variant="h2" fontSize={40} fontWeight={700} textAlign={'center'} >What service do I provide</Typography>
      <CustomCard cardsInfo={servicesInfo} />
    </Box>
  );
};
