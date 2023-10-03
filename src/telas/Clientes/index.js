import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Container, Card } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import Text from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react'
import Axios  from 'axios';
import Header from './Componentes/Header/index'
import Cards from './Componentes/Cards/index'
import cors from 'cors'




function Clientes() {
  const [values, setValues] = useState();
  const [ listClientes, setlistClientes] = useState();
  const getClientes = async () => {
    await Axios.get("https://localhost:7103/api/customer").then((response) => {
      setlistClientes(response.data)
    })

  };


   useEffect(() => {
    getClientes();
  }, []);

  return (
    <React.Fragment sx={{height: '100vh', width: '100vw'}}>
      <Header/>
      <Container sx={{height: '200px'}}/>
      
        <Grid container spacing={1}>
        {typeof listClientes !== 'undefined' && listClientes.map((value)=> {
            return Cards(value);
        })}
        </Grid>



    </React.Fragment>

  );
}

export default Clientes;

