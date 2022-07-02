import React, { useState, useRef } from 'react';
import {
  Avatar,
  IconButton,
  Typography,
  Box,
  ButtonBase,
  Button,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { Popover } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import StyledBadge from '../atoms/StyledBadge';

function LinksBar() {
  const avatarRef = useRef(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handlePopoverClose = () => {
    setPopoverOpen(false);
  };

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={() => setPopoverOpen(!popoverOpen)}
        ref={avatarRef}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar src="/afriland.png" sx={{ width: 50, height: 50 }} />
        </StyledBadge>
      </Box>

      <Popover
        open={popoverOpen}
        onClose={handlePopoverClose}
        anchorEl={avatarRef.current}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            border: 1,
            borderColor: grey[200],
            padding: 2,
            marginLeft: 2,
            borderRadius: '5%',
          },
        }}
        elevation={0}
      >
        <Box flex flexDirection="column">
          <Typography variant="h6">AFRILAND FIRST BANK</Typography>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <EmailIcon />
            <Typography
              variant="span"
              sx={{ marginLeft: '8px', marginTop: '5px' }}
            >
              contact@afrilandfirstbank.com
            </Typography>
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <PhoneIcon />
            <Typography
              variant="span"
              sx={{ marginLeft: '8px', marginTop: '5px' }}
            >
              +237 222 23 30 68
            </Typography>
          </Box>
          <a
            href="https://www.google.com/search?tbs=lf:1,lf_ui:4&tbm=lcl&sxsrf=ALiCzsbPCqE7dLdMPdLVudlPXxhlVZGhQw:1656719559280&q=afriland+first+bank&rflfq=1&num=10&rldimm=778137090924627241&ved=2ahUKEwjP2sqm8dj4AhUW44UKHXttBScQu9QIegQIGhAJ#"
            target="_blank"
            rel="noreferrer"
          >
            <Button>See the location</Button>
          </a>
        </Box>
      </Popover>
    </>
  );
}

export default LinksBar;
