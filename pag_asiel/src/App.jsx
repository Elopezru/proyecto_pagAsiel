import React from 'react';
import { ThemeProvider } from '@emotion/react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import DrawerP from './Componentes/DrawerP';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import theme from './Componentes/temaConfig';
import { Navbar } from './Componentes/Navbar';


function App() {
  
  return (
    <div>
      <Navbar />


      <ThemeProvider theme={theme}>

      
      <Button variant ="contained" color="secondary" endIcon= {<SendIcon />}>
       HELLO 
      </Button>
      <p>
        PAGINA ASIEL
      </p>

      <Button variant ="outlined" color="primary" disableElevation endIcon= {<DeleteIcon />}>
       otro 
      </Button>

      <Button>
        MI BOTON PERSONALIZADO
      </Button>

    <div>
    <Typography variant="h1" align= 'center' color="secondary">
     TEXTO 
    </Typography>  
    </div>
    </ThemeProvider>
    </div>
    
  )
}

export default App
