import { Box, Container, Typography, FormControl, InputLabel, Input, InputAdornment, Button, useMediaQuery } from '@mui/material';
import { AccountCircleOutlined, EmailOutlined } from '@mui/icons-material';
import React from 'react';
import logo_primary from '../assets/fetch-logo.gif';
import Overlay from '../components/Overlay';
import Video from '../components/Video';

const Login = () => {
  const isNonMobile = useMediaQuery('(min-width: 360px)');
  return (
    <Box component='main' sx={{ minHeight: '100svh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '.8rem',
          border: isNonMobile ? '.5px solid black' : 'none',
          borderRadius: isNonMobile ? '1rem' : 'none',
          width: isNonMobile ? '90%' : '100%',
          minHeight: !isNonMobile && '100svh',
          maxWidth: '500px',
          padding: '2rem',
          backgroundColor: 'rgba(240, 234, 214, .9)',
        }}>
        <Box component='img' src={logo_primary} alt='Fetch' width={isNonMobile ? '200px' : '300px'} sx={{ mt: isNonMobile ? 1 : 3, mb: !isNonMobile && 2 }} />
        <Typography variant={isNonMobile ? 'h3' : 'h4'} component='h1' textAlign='center' color='rgb(0, 0, 128)' sx={{ m: isNonMobile ? 1 : 3 }}>
          Find Your Best Friend
        </Typography>
        <FormControl variant='standard' sx={{ m: isNonMobile ? 1 : 2 }}>
          <InputLabel htmlFor='name'>Name</InputLabel>
          <Input
            id='name'
            startAdornment={
              <InputAdornment position='start'>
                <AccountCircleOutlined />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant='standard' sx={{ m: isNonMobile ? 1 : 2 }}>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Input
            id='email'
            startAdornment={
              <InputAdornment position='start'>
                <EmailOutlined />
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          variant='contained'
          sx={{ mt: !isNonMobile && 3, backgroundColor: 'rgb(0, 0, 128)', color: 'rgb(240, 234, 214)', fontWeight: 'bold', '&:hover': { backgroundColor: 'rgb(0, 0, 100)' } }}>
          Enter Website
        </Button>
      </Container>

      <>
        <Overlay />
        <Video />
      </>
    </Box>
  );
};

export default Login;
