import { Box, Typography } from "@mui/material";
import React from "react";
import "./medical.css";

import SpecialistCard from "./SpecialistCard";
import doctor1 from "../../assets/doctor1.png";
import doctor2 from "../../assets/doctor2.png";
import doctor3 from "../../assets/doctor3.png";
import doctor4 from "../../assets/doctor4.png";
import doctor5 from "../../assets/doctor5.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";

const MedicalSpecialist = () => {
  const doctors = [
    {
      name: "Dr. Lesley Hull",
      specialist: "Medicine",
      src: doctor1,
    },
    {
      name: "Dr. Ahmad Khan",
      specialist: "Neurologist",
      src: doctor2,
    },
    {
      name: "Dr. Heena Sachdeva",
      specialist: "Orthopedics",
      src: doctor3,
    },
    {
      name: "Dr. Ankur Sharma",
      specialist: "Medicine",
      src: doctor4,
    },
    {
      name: "Dr. Ahmad Stevens",
      specialist: "Neurologist",
      src: doctor5,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingY: "50px",
        bgcolor: "white",
        flexDirection: "column",
        height: "auto", // Ensure auto height
      }}
    >
      <Typography
        variant="h3"
        color="rgba(27, 60, 116, 1)"
        align="center"
        fontWeight={600}
        fontSize={"48px"}
        lineHeight={"67px"}
        marginBottom={"50px"}
      >
        Our Medical Specialist
      </Typography>
      <Box sx={{ width: "100%", height: "auto" }}>
        {" "}
        {/* Add this Box to contain Swiper */}
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          loop={true}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile Portrait
            480: { slidesPerView: 1, spaceBetween: 20 }, // Mobile Landscape
            640: { slidesPerView: 1, spaceBetween: 20 }, // Small Tablets
            800: { slidesPerView: 2, spaceBetween: 20 }, // Large Tablets
            1024: { slidesPerView: 2, spaceBetween: 30 }, // Desktops
            1200: { slidesPerView: 3.7, spaceBetween: 30 }, // Desktops
          }}
        >
          {doctors.length > 0 ? (
            doctors.map((item, index) => (
              <SwiperSlide key={index}>
                <SpecialistCard
                  name={item.name}
                  specialist={item.specialist}
                  src={item.src}
                />
              </SwiperSlide>
            ))
          ) : (
            <p>No data available 😢</p>
          )}
        </Swiper>
      </Box>
    </Box>
  );
};

export default MedicalSpecialist;
