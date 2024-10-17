import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ActionAreaCard({ name, specialist, src }) {
  return (
    <Card
      sx={{
        minWidth: "365px",
        maxWidth: "fit-content",
        height: "450px",

        boxShadow: "none",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        height="350px"
        width="100%"
        image={src}
        alt="Loading..."
        sx={{
          bgcolor: "#2AA7FF",
          borderRadius: "50% 50% 0px 0px",
          boxShadow: "0px 15px 55px -10px rgba(0, 0, 0, 0.09)",
          border: "10px solid #fff",
          objectFit: "contain",
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#2AA7FF", textAlign: "center" }}
        >
          {specialist}
        </Typography>
      </CardContent>
    </Card>
  );
}
