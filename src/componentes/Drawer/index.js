import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Drawer from './Drawer';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';

function Draw() {
  return (
    ReactDOM.createRoot(document.querySelector("#root")).render(
      <React.StrictMode>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Drawer />} />
        </Routes>
        </BrowserRouter>
      </React.StrictMode>
    )
  );
 }
export default Draw;