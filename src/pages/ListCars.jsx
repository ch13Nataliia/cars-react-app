

import * as React from 'react';
import { useContext, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import  {CarsContext} from "../components/context/car.context"

function ListCars() {
  const {cars, fetchCars} = useContext(CarsContext)

  useEffect(() => {
fetchCars()
  }, [fetchCars]);


  return (
    <Box>
      <Typography variant="h3" component="h2">
        Cars List
      </Typography>
      <List>
        {cars.map(({ name, bhp, avatar_url, _id }) => (
          <ListItem key={_id}>
            <ListItemAvatar>
              <Avatar alt="" src={avatar_url} />
            </ListItemAvatar>
            <ListItemText>
              {name} (BHP: {bhp})
            </ListItemText>
            <IconButton
              aria-label="update"
              to={`/update/${_id}`}
              component={Link}
            >
              {' '}
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => console.log(`Delete ${_id}`)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ListCars;
