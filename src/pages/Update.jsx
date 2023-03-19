import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CarForm from '../components/form/CarForm';
import {CarsContext} from "../components/context/car.context"

function Update() {
  const { id } = useParams();
  const {cars, updateCar} = useContext(CarsContext);

  const car = cars.find(({_id})=> id === _id);

  return (
    <>
    <Typography variant="h4" component="h1" sx ={{ marginBottom: 2}}>
        Update Car
      </Typography>
      <CarForm cat = {car} submitHandler={updateCar}/>
    </>
  )
  
}

export default Update;
