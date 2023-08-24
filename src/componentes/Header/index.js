import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './estilo.css';
import { Container, Card } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import Text from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
function Header() {
  return (
    <React.Fragment>
    <AppBar sx={{ position: "static", justifyContent: 'space-between', alignItems: 'left', flexDirection: 'row' }}>
      <IconButton sx={{ borderRadius: '50px' }} component={Link} to="/" color="inherit" aria-label="back">
        <ArrowBackIcon />
        <Typography sx={{ padding: '10px' }} variant="h6">Clientes</Typography>
      </IconButton>

      <IconButton sx={{ borderRadius: '50px' }} component={Link} to="/" color="inherit" aria-label="back">
        <Typography sx={{ padding: '10px' }} variant="h6">Incluir Clientes</Typography>
        <AddCircleIcon />
      </IconButton>

    </AppBar>
    
</React.Fragment>
  );
}

export default Header;