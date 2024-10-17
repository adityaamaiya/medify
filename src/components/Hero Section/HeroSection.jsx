import React from "react";
import { Box, Typography } from "@mui/material";
import heroImage from "../../assets/hero-image.svg";
import Button from "../Button/Button";

export default function HeroSection() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(81deg, #e7f0ff 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
        height: "832px",
        width: "100%",
        display: "flex",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          marginTop: "100px",
          marginLeft: "50px",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          position: "absolute",
          left: "130px",
          fontFamily: "Poppins, sans-serif",
          fontSize: "31px",
          fontWeight: 500,
          lineHeight: "68px",
          letterSpacing: "0.02em",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "31px",
            fontWeight: 500,
            lineHeight: "38px",
            letterSpacing: "0.02em",
            margin: 0,
          }}
        >
          Skip the travel! Find Online
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "56px",
            fontWeight: 700,
            lineHeight: "68px",
            letterSpacing: "0.02em",
            margin: 0,
          }}
        >
          Medical <span style={{ color: "#2aa8ff" }}>Centers</span>
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "32px",
            letterSpacing: "0.02em",
            color: "#5C6169",
            marginTop: "16px",
            fontWeight: 400,
            width: "570px",
          }}
        >
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </Typography>
        <Button style={{ marginTop: "40px" }}>Find Centers</Button>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "-5px",
          left: "730px",
          width: "643px",
          height: "735.94px",
          angle: "-180 deg",
          "@media (max-width: 768px)": {
            width: "50%", // Adjust width for small screens
            left: "50%",
            transform: "translateX(-50%)",
            top: "400px", // Adjust the position
          },
        }}
      >
        <img
          src={heroImage}
          alt="heroImage"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
}
