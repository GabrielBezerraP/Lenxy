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

  
  const [editValues, setEditValues] = useState({
    id: props.id,
    nome: props.name,
    sobrenome: props.sobrenome,
    telefone: props.phone[0].phoneNumber
});

const handleEditUsuario = () => {
      
  Axios.put("https://localhost:7103/api/customer", {
      id: editValues.id,
      firstName: editValues.name,
      email: editValues.email,
      documentNumber: "string",
      documentType: "string",
      status: true,
      birthDay: "2023-10-04T01:30:53.856Z",
      phone: [
        {
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          phoneNumber: "string"
        }
      ],
      address: {
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          zipCode: "string",
          state: "SP",
          city: "string",
          street: "string",
          number: "string"
          } 
    });
    handleClose();
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
              multiline
              maxRows={4}
            />
            <TextField sx={styleModal}
              id="outlined-multiline-flexible"
              label="Sobrenome"
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
              label="Endereço"
              multiline
              maxRows={4}
            />

            <TextField sx={styleModal}
              id="outlined-multiline-flexible"
              label="Email"
              multiline
              maxRows={4}
            />
            <TextField sx={styleModal}
              id="outlined-multiline-flexible"
              label="Telefone"
              multiline
              maxRows={4}
            />

            </Container>

            <IconButton sx={{ borderRadius: '50px' }} onClick={(handleOpen)} color="inherit" aria-label="back">
              <Typography sx={{ padding: '10px' }} variant="h6">Salvar</Typography>
              <SaveIcon />
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
