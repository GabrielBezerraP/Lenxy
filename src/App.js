import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import MiniDrawer from './componentes/Drawer';
import TelaClientes from './telas/Clientes'
import TelaOrcamentos from './telas/Orcamento';
import TelaAgendas from './telas/Agenda';
import TelaCustos from './telas/Custos';
import TelaPrecificacao from './telas/Precificação';
import TelaVendas from './telas/Vendas';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<MiniDrawer />} />
      <Route exact path="/Clientes" element={<TelaClientes />} />
      <Route exact path="/Orcamentos" element={<TelaOrcamentos />} />
      <Route exact path="/Agendas" element={<TelaAgendas />} />
      <Route exact path="/Custos" element={<TelaCustos />} />
      <Route exact path="/Precificacao" element={<TelaPrecificacao />} />
      <Route exact path="/Vendas" element={<TelaVendas />} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;