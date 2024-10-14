import { Box, Typography } from '@mui/material';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Caraousel = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "white",
        padding: "100px",
        paddingTop: "150px",
      }}
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true} // Enable infinite loop
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          400: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          800: { slidesPerView: 3, spaceBetween: 40 },
        }}
      >
        {data.length > 0 ? (
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item} // Using the correct dynamic image URL
                height="200px"
                width="400px"
                alt={`carousel-image-${index}`} // Dynamic alt text
                style={{
                  objectFit: "cover", // Ensures images fill the space without distortion
                  borderRadius: "20px", // Optional for rounded corners
                }}
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <Typography variant="body1" color="textSecondary" align="center">
              No data available 😢
            </Typography>
          </SwiperSlide>
        )}
      </Swiper>
    </Box>
  );
};

export default Caraousel;
