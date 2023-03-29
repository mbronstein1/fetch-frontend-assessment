import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

const Layout = () => {
  return (
    <Box>
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
