import React from "react";
import { Box } from "@mui/material";
import patientCare from "../../assets/patient-care.svg";

export default function PatientCare() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        padding: "50px",
        background:
          "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
      }}
    >
      <img src={patientCare} alt="Patient Care" sx={{ width: "100%" }} />
    </Box>
  );
}
