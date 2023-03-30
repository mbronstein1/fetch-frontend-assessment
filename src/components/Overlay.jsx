import React from 'react';
import { Box } from '@mui/material';

const Overlay = () => {
  return <Box sx={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: '-1', background: 'black', opacity: '.5' }} component='div'></Box>;
};

export default Overlay;
