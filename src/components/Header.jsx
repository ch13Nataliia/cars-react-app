import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import MobNav from './MobNav';
import DeskNav from './DeskNav';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <MobNav handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <DeskNav handleDrawerToggle={handleDrawerToggle} />
    </Box>
  );
}

export default Header;
