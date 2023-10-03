import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

export default function Cards(props) {
  return (
    <Card sx={{ width: 350, boxShadow: '-moz-initial' ,  backgroundColor:'lightBlue', margin:'25px',marginLeft: '100px' }}>
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
      <IconButton sx={{ borderRadius: '50px' }} to="/" color="inherit" aria-label="back">
          <DeleteIcon/>
      </IconButton>
    </Card>
  );
}