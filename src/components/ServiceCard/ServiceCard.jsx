import React from "react";
import { Box, Typography } from "@mui/material";

export default function ServiceCard({ icon, Title, selected, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        backgroundColor: selected ? "rgba(42, 167, 255, 0.08)" : "#fafbfe",
        width: "180px",
        height: "150px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
       
        padding: "10px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxSizing: "border-box",
        border: selected ? "2px solid #2aa7ff" : "none",
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        },
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={Title}
        sx={{
          width: "52.5px",
          height: "52.5px",
          marginBottom: "20px",
        }}
      />
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "18px",
          fontWeight: selected ? 700 : 400,
          lineHeight: "27px",
          textAlign: "center",
          color: selected ? "#2aa7ff" : "#abb6c7",
        }}
      >
        {Title}
      </Typography>
    </Box>
  );
}
