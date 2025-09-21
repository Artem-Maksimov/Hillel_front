import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mt: 'auto', textAlign: 'center' }}>
      <Typography variant="body1">
        Контакти: email@example.com | Телефон: +380-XXX-XX-XX
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        &copy; 2025 My QA Portfolio. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;