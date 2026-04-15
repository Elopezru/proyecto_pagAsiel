import React from 'react';
import { ThemeProvider } from '@emotion/react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import DrawerP from './Componentes/DrawerP';
import Divider from '@mui/material/Divider';



function App() {
  
  return (
    <div>
      <DrawerP />
      <Divider />
      <Button variant ="contained" color="secondary" endIcon= {<SendIcon />}>
       HELLO 
      </Button>
      <p>
        PAGINA ASIEL
      </p>

      <Button variant ="outlined" color="primary" disableElevation endIcon= {<DeleteIcon />}>
       otro 
      </Button>
    </div>
  )
}

export default App
