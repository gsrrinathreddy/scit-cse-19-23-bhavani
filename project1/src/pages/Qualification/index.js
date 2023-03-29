// import ITimeline from "../../ITimeline";

// export default function Qualification(){
//     return(
//         <>
//         <ITimeline/>
//         </>
//     )
  
// }
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree Chaithanya Institute Of Technological Sciences" src="https://img.collegedekhocdn.com/media/img/institute/logo/1434463349.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaithanya Institute Of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                7.8 CGPA
              </Typography>
              {" — B.Tech Computer Science and Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Jawahar Navodaya Vidhyalaya" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9x3we8v0UrJom0PVeygI6M5Z4zFqIBEtJ7k0792vHxjnTFowEMo4hvxWYb-Hr58fTkHQ&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Jawahar Navodaya Vidhyalaya "
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                8.2 CGPA
              </Typography>
              {" — Intermediate MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Jawahar Navodaya Vidhyalaya" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9x3we8v0UrJom0PVeygI6M5Z4zFqIBEtJ7k0792vHxjnTFowEMo4hvxWYb-Hr58fTkHQ&usqp=CAU" />
          </ListItemAvatar>
        <ListItemText
          primary="Jawahar Navodaya Vidhyalaya"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                9.0 CGPA
              </Typography>
              {' — Secondary School Of Education'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}