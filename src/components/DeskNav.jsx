import React from 'react';

function DeskNav() {
  return (
  <>
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
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >

          Cars APP
        
        </Typography>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button >
              Add Car
            </Button>
        </Box>

      </Toolbar>
    </AppBar>
  </>

  );
}

export default DeskNav;
