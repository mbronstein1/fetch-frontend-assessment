import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <Box>
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
