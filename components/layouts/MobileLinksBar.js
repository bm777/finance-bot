import React from 'react';
import {
  Typography,

} from '@mui/material';
import { Box } from '@mui/system';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function MobileLinksBar() {
  return (
    <Box flex flexDirection="column">
      <Typography variant="h6">AFRILAND FIRST BANK</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginY: '10px',
        }}
      >
        <EmailIcon />
        <Typography variant="span" sx={{ marginLeft: '8px' }}>
        contact@afrilandfirstbank.com
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginY: '10px',
        }}
      >
        <PhoneIcon />
        <Typography variant="span" sx={{ marginLeft: '8px' }}>
        +237 222 23 30 68
        </Typography>
      </Box>

    </Box>
  );
}

export default MobileLinksBar;
