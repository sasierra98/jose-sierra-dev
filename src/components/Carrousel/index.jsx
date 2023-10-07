import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box } from "@mui/material";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

export const Carrousel = ({data, children}) => {
  return (
    <Box className="flex flex-row w-full relative">
      <Swiper
        className="flex text-center absolute"
        modules={[Navigation, Autoplay]}
        direction="horizontal"
        slidesPerView={6}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={7000}
      >
        {data.map((_v, i) => (
          <SwiperSlide>
            {_v}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}