

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import * as React from 'react';
import List from '@mui/material/List';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

function CarsList({
  cars = [],
  deleteHandler = () => console.log(`No deleteHandler provided to Cars List`),
}) {
  const reversedCars = [...cars].reverse();
  console.log(reversedCars);

  return (
<List>
      {reversedCars.map(({ name, bhp, avatar_url, _id }) => (
        <Card key={_id} sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt="" height="140" src={avatar_url} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              (BHP: {bhp})
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              aria-label="update"
              to={`/update/${_id}`}
              component={Link}
            >
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => deleteHandler(_id)}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </List>
  );
}

export default CarsList;


