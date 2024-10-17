import React, { useEffect, useState } from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";

export default function Search({ placeholder, icon, type, selectedState, selectedValue, onSelect }) {
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
        console.log("Fetching data from API:", apiUrl); // Debugging log
        const result = await axios.get(apiUrl);
        const data = result.data;
        console.log("Received options:", data); // Log the fetched options
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
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 2, backgroundColor: "#fff" }}>
      <Autocomplete
        disablePortal
        options={options}
        value={selectedValue}
        onChange={(event, newValue) => {
          console.log("Selected value:", newValue); // Debugging selection
          onSelect(newValue); // Handle selection
        }}
        sx={{
          width: "300px",
          height: "50px",
          borderRadius: "8px",
          backgroundColor: "#fff",
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  {icon}
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </Box>
  );
}
