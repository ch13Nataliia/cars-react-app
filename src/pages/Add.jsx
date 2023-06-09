import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import CarForm from '../components/form/CarForm'
import { CarsContext } from '../components/context/car.context';
import { useNavigate } from 'react-router-dom';




function Add() {
  const { addCar } = useContext(CarsContext);
  const navigate = useNavigate();

  const submitHandler = (data) => {
    addCar(data);
    navigate("/");
  };
  
  return (
    <>
      <Typography variant="h4" component="h1">
        Add Car
      </Typography>
      <CarForm submitHandler={submitHandler} />
    </>
  );
}

export default Add;
