'use client'
import * as React from 'react';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Link from "next/link";



function ResponsiveDrawer({navBarLabels}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {navBarLabels.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText>{text}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <div className="space-x-2">
        <IconButton
          onClick={handleDrawerToggle}
        >
          <MenuIcon/>
        </IconButton>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </div>
  );
}

export default ResponsiveDrawer;
