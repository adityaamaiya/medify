import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero Section/HeroSection";
import Overlay from "./components/Overlay/Overlay";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header/Header";
import caraouselImg1 from "./assets/caraousel-img1.svg";
import caraouselImg2 from "./assets/caraousel-img2.svg";
import Caraousel from "./components/Caraousel/Caraousel";
import Specialization from "./components/Specialization/Specialization";
import MedicalSpecialist from "./components/Medical specialist/medical";
import PatientCare from "./components/PatientCare/Ptaientcare";
import News from "./components/News/News";
import Families from "./components/Families/Families";
import FAQ from "./components/FAQ/FAQ";
import MedifyApp from "./components/MedifyApp/MedifyApp";
import Footer from "./components/Footer/Footer";

// Define a global theme
const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif", // Apply the Poppins font globally
  },
});

// Data for Carousel component
const data1 = [caraouselImg1, caraouselImg2, caraouselImg1,caraouselImg2];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This will apply the global styles and font */}
      <Header />
      <Navbar />
      <HeroSection />
      <Overlay />
      <Caraousel data={data1} /> {/* Pass the data array to the Carousel */}
      <Specialization />
      <MedicalSpecialist />
      <PatientCare />
      <News />
      <Families />
      <FAQ />
      <MedifyApp />
      <Footer />
      {/* Your other components */}
    </ThemeProvider>
  );
}

export default App;
