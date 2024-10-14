import React from 'react';
import footer from '../../assets/footer.svg';
import { Box } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0px',
      margin: '0px',
      

      background:
          "rgba(27, 60, 116, 1)",
        
    }}>
      <img src={footer} alt="footer" sx={{ width: '100%',height: '100%'}} />
    </Box>
  );
}