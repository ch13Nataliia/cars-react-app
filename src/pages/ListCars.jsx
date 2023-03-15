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
import { CarsContext } from '../components/context/car.context';
import CarsList from "../components/CarsList"



function ListCars() {
  const { cars, fetchCars, deleteCar } = useContext(CarsContext);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);



  
  const deleteHandler = (id) => {
deleteCar(id);
  }
  
  return (
    <Box>
      <Typography variant="h3" component="h2">
        Cars List
      </Typography>
      <CarsList cats={cars}  deleteHandler={deleteHandler} />
    </Box>
  );
}

export default ListCars;
