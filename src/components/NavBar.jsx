import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo_primary from '../assets/fetch-logo.gif';
import Auth from '../utils/auth';

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'fetch-api-key': process.env.REACT_APP_API_KEY,
        },
      });
      Auth.logout();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: 'rgb(240, 234, 214)' }}>
        <Toolbar>
          <Box variant='h5' component='div' sx={{ flexGrow: 1 }}>
            <Box component='img' src={logo_primary} width='100px' borderRadius='10px'></Box>
          </Box>
          <Button onClick={logoutHandler} sx={{ color: 'rgb(0, 0, 128)' }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
