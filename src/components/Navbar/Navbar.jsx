import { Toolbar, Grid, Typography } from "@mui/material";
import logo from "../../assets/logo.svg";
import Button from "../Button/Button"; // Import your custom button component
import { useNavigate } from "react-router-dom";

export default function Navbar({style}) {
  const navigate = useNavigate();
  return (
    <Toolbar
    
      sx={{
        display: "flex",
        justifyContent:"flex-end",// Use space-between to ensure elements are distributed
        alignItems: "center",
       
        
      }}
      style={style}
    >
      {/* Logo Section */}
      <div style={{ display: "flex", alignItems: "center",left: "180px " ,position: "absolute",marginRight:"100px" , cursor:"pointer"}} onClick={()=>{navigate("/")}}>
        <img src={logo} alt="Medify logo" />
        <Typography variant="h6" sx={{ color: "#2aa8ff", fontWeight: 700, marginLeft: 1 }}>
          Medify
        </Typography>
      </div>

      {/* Nav Links */}
      <Grid
        container
        spacing={5}
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "flex-end",
          width: "max-content",
          paddingX:"120px",
          
        }}
      >
        <Grid item sx={{   }}>
          <Typography sx={{ color: "#102851", cursor: "pointer" }}>Find Doctors</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ color: "#102851", cursor: "pointer" }}>Hospitals</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ color: "#102851", cursor: "pointer" }}>Medicines</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ color: "#102851", cursor: "pointer" }}>Surgeries</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ color: "#102851", cursor: "pointer" }}>Software for Provider</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ color: "#102851", cursor: "pointer" }}>Facilities</Typography>
        </Grid>

        {/* My Bookings Button */}
        <Grid item>
          <Button sx={{ backgroundColor: "#2aa7ff", color: "#fff", textTransform: "none" }}>
            My Bookings
          </Button>
        </Grid>
      </Grid>
    </Toolbar>
  );
}
