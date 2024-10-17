import React from "react";
import { Button as MUIButton, Box } from "@mui/material";

export default function Button({ children, icon, style, onClick }) { // Accept onClick as a prop
  return (
    <MUIButton
      variant="contained"
      startIcon={icon && <img src={icon} alt="icon" style={{ width: "20px", height: "20px" }} />} // Display icon if provided
      sx={{
        backgroundColor: "#2aa8ff",
        color: "#fff",
        width: "140px",
        height: "40px",
        borderRadius: "8px",
        fontFamily: "Poppins, sans-serif",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "21px",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "none",
        gap: "8px", // Space between icon and text
        "&:hover": {
          backgroundColor: "#1e96e6", // Darken the color on hover
        },
        ...style, // Apply any inline styles passed as props
      }}
      onClick={onClick} // Ensure the click event is passed down
    >
      {children}
    </MUIButton>
  );
}
