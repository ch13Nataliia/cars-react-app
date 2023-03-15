import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

function MobNav({
  mobileOpen = false,
  handleDrawerToggle = () =>
    console.log('No handleDrawToggle function provided'),
  drawerWidth = 240,
}) {
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Cars APP
          </Typography>
          <Divider />
          <List>
            <ListItem>
              <ListItemButton sx={{ textAlign: 'left' }} component={NavLink} to="/">
                <ListItemText primary={'List Cars'} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ textAlign: 'left' }} component={NavLink} to="/add">
                <ListItemText primary={'Add Car'} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default MobNav;
