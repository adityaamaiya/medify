import React from "react";
import { Box } from "@mui/material";
import faq from "../../assets/faq.svg";

export default function FAQ() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        padding: "50px",
        background: "#ffff",
      }}
    >
      <img src={faq} alt="news" sx={{ width: "100%" }} />
    </Box>
  );
}
