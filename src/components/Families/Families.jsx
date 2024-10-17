import React from "react";
import { Box } from "@mui/material";
import families from "../../assets/families.svg";

export default function Families() {
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
      <img src={families} alt="news" sx={{ width: "100%" }} />
    </Box>
  );
}
