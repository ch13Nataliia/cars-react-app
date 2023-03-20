import * as React from 'react';
import { useContext, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import { CarsContext } from '../components/context/car.context';
import CarsList from "../components/CarsList"


import CircularProgress from "@mui/material/CircularProgress";

function ListCars() {
  const { cars, fetchCars, deleteCar, loading, error } = useContext(CarsContext);



  useEffect(() => {
    fetchCars();
  }, [fetchCars]);


  
  const deleteHandler = (id) => {
deleteCar(id);
  }
  
  let callStatusComponent = null;

  if (loading) {
    callStatusComponent = <CircularProgress />
  } else if (error) {
    callStatusComponent = <p>{error}: Loading from localStorage</p>;
  } else if (cars.lenght === 0) {
    callStatusComponent= <p>No cars to display</p>
  }

  return (
    <>
      <Typography variant="h3" component="h2">
        Cars List
      </Typography>
      {callStatusComponent}
      
      <CarsList cars={cars}  deleteHandler={deleteHandler} />
    </>
  );
}

export default ListCars;
