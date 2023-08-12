import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Drawer from './Drawer';

function Draw() {
  return (
    ReactDOM.createRoot(document.querySelector("#root")).render(
      <React.StrictMode>
        <StyledEngineProvider injectFirst>
          <Drawer />
        </StyledEngineProvider>
      </React.StrictMode>
    )
  );
}
export default Draw;