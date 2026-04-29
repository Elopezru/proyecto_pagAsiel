import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {createTheme}from '@mui/material/styles';

const theme = createTheme(theme => ({
  offset: theme.mixins.toolbar //ALTO DEL APPBAR
}))

export const Navbar = () => {
  const classes = createTheme()
  return (
    <div>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6">
              PAGINA ASIEL
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.mixins.offset}></div>
    </div>
  )
}
