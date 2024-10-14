import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import ServiceCard from "../ServiceCard/ServiceCard";
import hospitalIcon from "../../assets/hospital.svg";
import doctorIcon from "../../assets/doctor.svg";
import ambulanceIcon from "../../assets/ambulance.svg";
import medicineIcon from "../../assets/medical.svg";
import labsIcon from "../../assets/labs.svg";
import Search from "../Search/Search";
import Button from "../Button/Button"; // Your custom button
import searchIcon from "../../assets/search2.svg"; // Import the search icon
import axios from "axios";

export default function Overlay() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedState, setSelectedState] = useState(null); // State for the selected state
  const [selectedCity, setSelectedCity] = useState(null); // State for the selected city

  // Function to set the selected card
  const handleCardClick = (title) => {
    setSelectedCard(title); // Set the selected card title
  };

  const handleSearch = async(state, city) => {
    // Handle the search logic here
    const result = await axios.get(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`);
    console.log(result.data);
  };

  return (
    <Box
      sx={{
        width: "1170px",
        height: "429px",
        position: "absolute",
        top: "580px",
        left: "50%",
        transform: "translateX(-50%)", // This will center it horizontally
        backgroundColor: "#fff",
        borderRadius: "15px",
        boxShadow: "6px 6px 35px rgba(16, 40, 81, 0.11)",
        zIndex: 999,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Search
          placeholder="State"
          type="state"
          selectedValue={selectedState}
          onSelect={setSelectedState} // Callback to set the selected state
        />
        <Search
          placeholder="City"
          type="city"
          selectedState={selectedState} // Pass the selected state
          selectedValue={selectedCity}
          onSelect={setSelectedCity} // Callback to set the selected city
        />
        <Button
          icon={searchIcon}
          style={{
            height: "50px",
          }}
          onClick={
            
            handleSearch(selectedState, selectedCity)
          }
        >
          Search
        </Button>
      </Box>

      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: 500,
          lineHeight: "30px",
          color: "#102851",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "60px",
          marginBottom: "0px",
        }}
      >
        You may be looking for
      </Typography>

      <Grid container spacing={4} sx={{ marginTop: "0px", flexWrap: "wrap", justifyContent: "center" }}>
        <Grid item>
          <ServiceCard
            icon={doctorIcon}
            Title="Doctors"
            selected={selectedCard === "Doctors"}
            onClick={() => handleCardClick("Doctors")}
          />
        </Grid>
        <Grid item>
          <ServiceCard
            icon={labsIcon}
            Title="Labs"
            selected={selectedCard === "Labs"}
            onClick={() => handleCardClick("Labs")}
          />
        </Grid>
        <Grid item>
          <ServiceCard
            icon={hospitalIcon}
            Title="Hospitals"
            selected={selectedCard === "Hospitals"}
            onClick={() => handleCardClick("Hospitals")}
          />
        </Grid>
        <Grid item>
          <ServiceCard
            icon={medicineIcon}
            Title="Medical Store"
            selected={selectedCard === "Medical Store"}
            onClick={() => handleCardClick("Medical Store")}
          />
        </Grid>
        <Grid item>
          <ServiceCard
            icon={ambulanceIcon}
            Title="Ambulance"
            selected={selectedCard === "Ambulance"}
            onClick={() => handleCardClick("Ambulance")}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
