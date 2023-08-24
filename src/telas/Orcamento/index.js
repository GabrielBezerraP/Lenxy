import React from 'react';
import { Link } from 'react-router-dom';
import './estilo.css';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import Text from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Orcamentos() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton  component={Link} to="/" edge="start" color="inherit" aria-label="back">
            <ArrowBackIcon/>
          </IconButton>
          <Typography variant="h6">Meus Orçamentos</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Orcamentos;

