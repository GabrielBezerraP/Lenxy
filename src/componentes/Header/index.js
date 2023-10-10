import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, TextField, MenuItem, Container } from '@mui/material';
import { Text, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveIcon from '@mui/icons-material/Save';
import Axios  from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const tiposClientes = [
  {
    value: 'CPF',
    label: 'CPF',
  },
  {
    value: 'CNPJ',
    label: 'CNPJ',
  },
];

const styleBox = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
  width: '150',
};

const styleModal = {
  marginLeft: '40px',
  width: '250px',
  margin: '10px',
  borderRadius: 5
};

const styleDropDown = {
  marginLeft: '40px',
  width: '100px',
  margin: '10px',
  borderRadius: 5
};

const styleModalMae = {
  marginLeft: '40px',
  width: '100',
  margin: '10px',
  borderRadius: 5
};




export default function TransitionsModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [values, setValues] = useState();

  const handleCLickButton = () =>{
    Axios.post("https://localhost:7103/api/customer", {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      documentNumber: "string",
      documentType: "CPF",
      status: true,
      birthDay: "2023-10-03T01:12:03.841",
      phone: [{
        phoneNumber: values.telefone
      }],
      address:{
        zipcode: "string",
        state: values.state,
        city: "string",
        street: "string",
        number: "string"
      }
    }).then((response) => {
      console.log(response)
    });
  }

  const handleChangeValues = (value) =>{
    setValues(prevValue=> ({
      ...prevValue,
      [value.target.name]: value.target.value,

    }))
  }

  return (
    <div>
      <Modal sx={{ borderRadius: '10%' }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={styleBox}>
            <Container sx={{flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
            <TextField sx={styleModal}
              id="outlined-multiline-flexible"
              label="Nome"
              name="firstName"
              onChange={handleChangeValues}
              multiline
              maxRows={4}
            />
            <TextField sx={styleModal}
              id="outlined-multiline-flexible"
              name="lastName"
              label="Sobrenome"
              onChange={handleChangeValues}
              multiline
              maxRows={4}
            />
            <TextField sx={styleDropDown}
              id="outlined-select-currency"
              select
              label="Tipo"
              defaultValue="CPF"
            >
              {tiposClientes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            </Container>
            <Container sx={{flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>

            <TextField sx={styleModal}
              id="outlined-multiline-flexible"
              name="state"
              label="Endereço"
              onChange={handleChangeValues}
              multiline
              maxRows={4}
            />

            <TextField sx={styleModal}
              id="outlined-multiline-flexible"
              name='email'
              label="Email"
              onChange={handleChangeValues}
              multiline
              maxRows={4}
            />
            <TextField sx={styleModal}
              id="outlined-multiline-flexible"
              name='telefone'
              label="Telefone"
              onChange={handleChangeValues}
              multiline
              maxRows={4}
            />

            </Container>

            <IconButton sx={{ borderRadius: '50px' }} onClick={(handleOpen)} color="inherit" aria-label="back">
              <Typography sx={{ padding: '10px' }} variant="h6">Salvar</Typography>
                <Button className='register--button' onClick={() => handleCLickButton()}></Button>
            </IconButton>
          </Box>
        </Fade>
      </Modal>

      <AppBar sx={{ position: "static", justifyContent: 'space-between', alignItems: 'left', flexDirection: 'row' }}>
        <IconButton sx={{ borderRadius: '50px' }} component={Link} to="/" color="inherit" aria-label="back">
          <ArrowBackIcon />
          <Typography sx={{ padding: '10px' }} variant="h6">Clientes</Typography>
        </IconButton>

        <IconButton sx={{ borderRadius: '50px' }} onClick={(handleOpen)} color="inherit" aria-label="back">
          <Typography sx={{ padding: '10px' }} variant="h6">Incluir Clientes</Typography>
          <AddCircleIcon />
        </IconButton>

      </AppBar>
    </div>
  );
}
