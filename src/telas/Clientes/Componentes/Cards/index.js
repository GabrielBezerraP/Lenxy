import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Container } from '@mui/material';
import Axios from 'axios';

export default function Cards(props) {


  const deleteClientes = (props) => {
    
    Axios.delete("https://localhost:7103/api/customer/"+ props.id).then((response) => {
      window.location.reload(true);
    })
  };


  return (
    <div>



      <Card sx={{ width: 350, boxShadow: '-moz-initial', backgroundColor: 'lightBlue', margin: '25px', marginLeft: '100px' }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.firstName + " " + props.lastName}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {props.email}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Container sx={{ textAlign: 'right', justifyContent: 'right', }}>
        <IconButton sx={{ borderRadius: '50px', alignItems: 'right' }} color="Black" aria-label="back">
          <Button className='register--button' onClick={() => deleteClientes(props)}>
            <DeleteIcon sx={{color: 'black'}}/>
          </Button>
        </IconButton>
        </Container>
      </Card>
    </div>
  );
}