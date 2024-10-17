import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import { CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/material";
import Search from "../Search/Search";
import Button from "../Button/Button";
import searchIcon from "../../assets/search2.svg"; // Import the search icon
import axios from "axios";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import FAQ from "../FAQ/FAQ";
import MedifyApp from "../MedifyApp/MedifyApp";
import verificattion from "../../assets/verification.svg";
import campaign from "../../assets/campaign.svg";
import locationIcon from "../../assets/location.svg";

import { theme } from "../../Home";
import CenterCard from "./CenterCard";

export default function SearchPage() {
  const location = useLocation();

  const [result, setResult] = useState(location.state?.result || []);

  // Log the location state for debugging
  console.log("Location State:", location.state);

  // Use the extracted state and city to set up component state if needed
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleSearch = async (state, city) => {
    // Handle the search logic here
    const result = await axios.get(
      `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
    );
    console.log(result.data);
    // Return the result data
    setResult(result.data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Navbar style={{ backgroundColor: "#fff" }} />
      <div
        style={{
          height: "90px",
          borderBottomLeftRadius: "16px",
          borderBottomRightRadius: "16px",
          background:
            "linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
        }}
      ></div>
      <div>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "white",
            width: "1170px",
            marginLeft: "100px",
            borderRadius: "16px",
            boxShadow: "6px 6px 35px rgba(16, 40, 81, 0.11)",
            position: "absolute",
            top: "150px",
          }}
        >
          <Search
            placeholder="State"
            type="state"
            icon={
              <img
                src={locationIcon}
                alt="state icon"
                style={{ width: "20px", height: "20px" }}
              />
            }
            selectedValue={selectedState}
            onSelect={setSelectedState}
            // Callback to set the selected state
          />
          <Search
            placeholder="City"
            type="city"
            icon={
              <img
                src={locationIcon}
                alt="state icon"
                style={{ width: "20px", height: "20px" }}
              />
            }
            selectedState={selectedState} // Pass the selected state
            selectedValue={selectedCity}
            onSelect={setSelectedCity} // Callback to set the selected city
          />
          <Button
            icon={searchIcon}
            style={{
              height: "50px",
            }}
            onClick={() => {
              handleSearch(selectedState, selectedCity);
            }}
          >
            Search
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",

            marginTop: "100px",
          }}
        >
          <Typography
            variant="h7"
            align="center"
            fontWeight={500}
            fontSize={"24px"}
            lineHeight={"36px"}
            marginLeft={"100px"}
            zIndex={999}
          >
            {result.length} medical centers available in{" "}
            {result[0]?.State || ""}
          </Typography>
          <img
            src={verificattion}
            alt="verification"
            style={{
              marginLeft: "100px",
              marginTop: "10px",
              width: "631px",
              height: "24px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: "20px",
            justifyContent: "space-between",
            marginRight: "200px",
          }}
        >
          <Box>
            {result.map((item) => (
              <CenterCard
                key={item["Provider ID"]}
                name={item["Hospital Name"]}
                address={item["Address"]}
                type={item["Hospital Type"]}
                booking={false}
              />
            ))}
          </Box>
          <img
            src={campaign}
            alt="campaign"
            style={{ width: "363px", height: "268px", marginTop: "20px" }}
          />
        </Box>
      </div>
      <FAQ />
      <MedifyApp />
      <Footer />
    </ThemeProvider>
  );
}
