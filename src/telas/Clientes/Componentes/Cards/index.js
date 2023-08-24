import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

export default function Cards() {
  return (
    <Card sx={{ width: 350, boxShadow: '-moz-initial' ,  backgroundColor:'lightBlue', margin:'25px',marginLeft: '100px' }}>
      <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nome Cliente
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Endereço cliente
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Data Ultimo ensaio
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tipo de ensaio
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}