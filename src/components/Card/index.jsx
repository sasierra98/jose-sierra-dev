import PropTypes from 'prop-types';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  useTheme 
} from "@mui/material";
import { CardStyle } from './style';

export const CustomCard = ({cardsInfo}) => {
  const theme = useTheme();
  return (
    <Box className="flex flex-col sm:flex-row justify-center gap-3 justify-between">
      {cardsInfo?.map((card, index) => (
        index % 2 === 0 
          ? (
            <Card
              className="p-3 xs:min-w-full sm:min-w-0 md:max-w-[20%] cursor-pointer"
              sx={CardStyle}
            >
              {/* <CardMedia /> */}
              <CardContent>
                {console.log(theme.palette.secondary.main)}
                <Box
                  className={`box-card-icon flex justify-center items-center h-[62px] w-[62px] rounded-xl mb-32`}
                  bgcolor={theme.palette.secondary.main}
                >
                  {card.icon}
                </Box>
                <Typography
                  className="service-card-title"
                  variant="h3"
                >
                  {card.title}
                </Typography>
                <Typography
                  className="service-card-text"
                  fontSize={12}
                  lineHeight={"28px"}
                >
                  {card.text}
                </Typography>
                <Typography component={"div"} fontSize={12}>
                  <ul>
                    {card.items?.map((item, i) => (
                      <li key={i}>{`• ${item}`}</li>
                    ))}
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          )
          : (
            <Card
              className="p-3 md:mt-10 xs:min-w-full sm:min-w-0 md:max-w-[20%] cursor-pointer"
              sx={CardStyle}
            >
              {/* <CardMedia /> */}
              <CardContent>
                {console.log(theme.palette.secondary.main)}
                <Box
                  className={`box-card-icon flex justify-center items-center h-[62px] w-[62px] rounded-xl mb-32`}
                  bgcolor={theme.palette.secondary.main}
                >
                  {card.icon}
                </Box>
                <Typography
                  className="service-card-title"
                  variant="h3"
                >
                  {card.title}
                </Typography>
                <Typography
                  className="service-card-text"
                  fontSize={12}
                  lineHeight={"28px"}
                >
                  {card.text}
                </Typography>
                <Typography component={"div"} fontSize={12}>
                  <ul>
                    {card.items?.map((item, i) => (
                      <li key={i}>{`• ${item}`}</li>
                    ))}
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          )
      ))}
    </Box>
  );
}

Card.propTypes = {
  cardsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
  )
}