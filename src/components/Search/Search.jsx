import React, { useEffect, useState } from "react";
import { TextField, Box } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";

export default function Search({ placeholder, type, selectedState, selectedValue, onSelect }) {
  const [options, setOptions] = useState([]);

  const fetchOptions = async () => {
    try {
      let apiUrl;
      if (type === "state") {
        apiUrl = "https://meddata-backend.onrender.com/states"; // API for states
      } else if (type === "city" && selectedState) {
        apiUrl = `https://meddata-backend.onrender.com/cities/${selectedState}`; // API for cities based on the selected state
      }

      if (apiUrl) {
        const result = await axios.get(apiUrl);
        const data = result.data;
        setOptions(data);
      }
    } catch (error) {
      console.error("Error fetching options:", error);
    }
  };

  // Fetch options when the component mounts or when selectedState changes
  useEffect(() => {
    fetchOptions();
  }, [selectedState]); // Refetch options when selectedState changes

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 2 }}>
      <Autocomplete
        disablePortal
        options={options}
        value={selectedValue}
        onChange={(event, newValue) => onSelect(newValue)} // Handle selection
        sx={{
          width: "300px",
          height: "50px",
          borderRadius: "8px",
          backgroundColor: "#fafbfe",
          "& .MuiOutlinedInput-root": {
            paddingLeft: "40px",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: 400,
            color: "#abb6c7",
            "& fieldset": {
              borderColor: "#f0f0f0",
            },
            "&:hover fieldset": {
              borderColor: "#2aa7ff",
            },
          },
        }}
        renderInput={(params) => <TextField {...params} placeholder={placeholder} />}
      />
    </Box>
  );
}
