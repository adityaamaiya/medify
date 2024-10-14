import React from "react";
import { Box } from "@mui/material";
import news from "../../assets/news.svg";

export default function News() {
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
        <img src={news} alt="news" sx={{ width: "100%" }} />
    </Box>
  );
}
