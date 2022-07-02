import React, { useState } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Drawer,
} from '@mui/material';
import { Box } from '@mui/system';

import ProjectCards from '../organisms/ProjectCards';

import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

function MobileSectionsBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [section, setSection] = useState('');

  const toggleDrawer = (isOpen, section) => {
    setSection(section);
    setDrawerOpen(isOpen);
  };

  const DrawerLayout = () => {
    return (
      <div sx={{ padding: 20 }}>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <IconButton
            onClick={() => toggleDrawer(false, '')}
            sx={{ margin: 2 }}
          >
            <ArrowBackIosNewRoundedIcon />
          </IconButton>
          <Typography variant="h6">{section}</Typography>
        </Box>
        <Box sx={{ marginX: 2 }}>
          <DrawerContent />
        </Box>
      </div>
    );
  };

  const DrawerContent = () => {
    switch (section) {
      case 'Projects':
        return <ProjectCards isDetailed={true} />;
      default:
        return <></>;
    }
  };

  return (
    <Box flex flexDirection="column">
      <List>
        <ListItem disablePadding>
          <ListItemButton
            aria-label="projects"
            onClick={() => toggleDrawer(true, 'Projects')}
          >
            <ListItemIcon>
              <ArchitectureRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </ListItem>

      </List>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false, '')}
      >
        <DrawerLayout />
      </Drawer>
    </Box>
  );
}

export default MobileSectionsBar;
