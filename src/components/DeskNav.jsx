import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
function DeskNav({
  
  handleDrawerToggle = () =>
    console.log('No handleDrawToggle function provided'),
}) {

  const theme = useTheme();
// console.log(theme)

const lightTextColor = theme.palette.common.white;

  return (
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textDecoration: "none", color: lightTextColor }}
        >
          Cars App
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } } }>
          <Button sx={{ color: lightTextColor }} component={NavLink} to="/add">
            Add Car
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default DeskNav;
