import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../Home";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Btn from "../Button/Button";
import FAQ from "../FAQ/FAQ";
import MedifyApp from "../MedifyApp/MedifyApp";
import CenterCard from "../SearchPage/CenterCard";
import campaign from "../../assets/campaign.svg";

export default function Bokkings() {
    const bookingsArrayy = JSON.parse(localStorage.getItem("bookings")) || [];
    const handleDay = (booking)=> {
        if(booking.day === "one"){
            return "Today";
        }
        else if(booking.day === "two"){
            return "Tomorrow";
        }
        else{
            return "Day after Tomorrow";
        }
    }
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Navbar style={{ backgroundColor: "#fff" }} />
      <Box sx={{display:"flex", }}>
      <Box>{bookingsArrayy.map((booking, index) => (
        <CenterCard
          key={index}
          name={booking.name}
          address={booking.address}
          type={booking.type}
          appoinmenttime={booking.time}
          day={handleDay(booking)}
          booking={true}
        />
      ))}</Box>
      <img src={campaign} alt="campaign" style={{ width: "363px", height: "268px", marginTop: "20px", marginLeft:"20px" }} />
      </Box>
      <FAQ />
      <MedifyApp />
      <Footer />
    </ThemeProvider>
  );
}
