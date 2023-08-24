import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, TextField, MenuItem } from '@mui/material';
import { Text, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveIcon from '@mui/icons-material/Save';

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

const tiposEnsaios = [
  {
    value: 'gestante',
    label: 'Gestantes',
  },
  {
    value: 'newborn',
    label: 'NewBorn',
  },
  {
    value: 'edicao',
    label: 'Edição',
  },
  {
    value: 'Evento',
    label: 'Evento',
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
};

const styleModal = {
  marginLeft: '40px',
  width: '100',
  margin: '10px',
  borderRadius: 5
};

const styleModalMae = {
  marginLeft: '40px',
  width: '100',
  margin: '10px',
  borderRadius: 5
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal sx={{borderRadius: '10%'}}
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
            <TextField sx={styleModal}
              id="outlined-multiline-flexible"
              label="Nome"

              multiline
              maxRows={4}
            />
            <TextField sx={styleModal}
              id="outlined-multiline-flexible"
              label="Endereço"
              multiline
              maxRows={4}
            />
            <TextField sx={styleModal}
              id="outlined-select-currency"
              select
              label="Tipo Ensaio"
              defaultValue="Gestantes"
              helperText="Selecione uma opção"
            >
              {tiposEnsaios.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField sx={styleModal}
              id="outlined-multiline-flexible"
              label="Email"
              multiline
              maxRows={4}
            />

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
