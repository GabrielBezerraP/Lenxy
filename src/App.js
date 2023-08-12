import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes,  Link, BrowserRouter } from 'react-router-dom';

import TelaClientes from './telas/Clientes'
import MiniDrawer from './componentes/Drawer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MiniDrawer />} />
      <Route path="/Clientes" element={<TelaClientes />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;