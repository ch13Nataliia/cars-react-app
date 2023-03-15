import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CarForm from '../components/form/CarForm';


function Update() {
  const { id } = useParams();

  return (
    <>
    <Typography variant="h4" component="h1">
        Update Cars
      </Typography>
      <CarForm/>
    </>
  )
  
}

export default Update;
