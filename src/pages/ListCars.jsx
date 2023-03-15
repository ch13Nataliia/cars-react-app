// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';

// function ListCars() {
//   const cars = [
//     {
//       name: 'Bentley',
//       bhp: 1234,
//       avatar_url:
//         'https://media.autoexpress.co.uk/image/private/s--Iy114UP0--/f_auto,t_content-image-full-desktop@1/v1602666123/autoexpress/2020/10/Bentley%20Flying%20Spur%20V8%202020.jpg',
//     },
//     {
//       name: 'Rolls-Royce',
//       bhp: 12345,
//       avatar_url:
//         'https://www.hdcarwallpapers.com/walls/wald_rolls_royce_phantom_sports_line_black_bison_edition_2019_4k_2-HD.jpg',
//     },
//   ];

//   return (
//     <List>
//       <ListItem key={_id}>
//         <ListItemAvatar>
//           <Avatar alt="" src={avatar_url} />
//         </ListItemAvatar>
//         <ListItemText>
//           {name} (BHP: {bhp})
//         </ListItemText>
//         <IconButton aria-label="update" to={`/update/${_id}`} component={Link}>
//           <EditIcon />
//         </IconButton>
//         <IconButton aria-label="delete" onClick={() => deleteHandler(_id)}>
//           <DeleteIcon />
//         </IconButton>
//       </ListItem>
//     </List>
//   );
// }

// export default ListCars;

import * as React from 'react';
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


function ListCars() {
  const cars = [
    {
      _id: 1,
      name: 'Bentley',
      bhp: 1234,
      avatar_url:
        'https://media.autoexpress.co.uk/image/private/s--Iy114UP0--/f_auto,t_content-image-full-desktop@1/v1602666123/autoexpress/2020/10/Bentley%20Flying%20Spur%20V8%202020.jpg',
    },
    {
      _id: 2,
      name: 'Rolls-Royce',
      bhp: 12345,
      avatar_url:
        'https://www.hdcarwallpapers.com/walls/wald_rolls_royce_phantom_sports_line_black_bison_edition_2019_4k_2-HD.jpg',
    },
  ];

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
