import React from 'react';
import Typography from '@mui/material/Typography';
import CarForm from '../components/form/CarForm';

function Add() {
  return (
    <>
      <Typography variant="h4" component="h1">
        Add Cars
      </Typography>
      <CarForm />
    </>
  );
}

export default Add;
