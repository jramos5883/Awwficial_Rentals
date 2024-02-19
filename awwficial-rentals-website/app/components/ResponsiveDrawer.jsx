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

      <List onClick ={handleDrawerToggle}>
        {navBarLabels.map(page => (
          <Link href={page.route} key={page.label}>
            <ListItem>
              <ListItemButton>
                <ListItemText primary={page.label}/>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

  );


  return (
    <div>
        <IconButton
          onClick={handleDrawerToggle}

        >
          <MenuIcon/>
        </IconButton>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor='right'
          sx={{
            '.MuiDrawer-paper': {
              width: "50vw",
            },
          }}
        >
          {drawer}
        </Drawer>
      </div>
  );
}

export default ResponsiveDrawer;
