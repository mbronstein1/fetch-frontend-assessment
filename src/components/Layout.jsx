import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Auth from '../utils/auth';

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = Auth.getUser();
    if (!user) {
      navigate('/');
    }
  }, [navigate]);
  return (
    <Box sx={{ fontFamily: 'lato, cursive' }}>
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
