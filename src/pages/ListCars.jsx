import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

function ListCars() {

  return (
  <>
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Typography variant="h6" component="h2">
      Cars APP
    </Typography>
    <Divider />
    <List>

        <ListItem >
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>

    </List>
  </Box>
  </>

  )
}

export default ListCars