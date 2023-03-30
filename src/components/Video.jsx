import { Box } from '@mui/material';
import React from 'react';
import video from '../assets/Dogs-video_480.mov';

const Video = () => {
  return (
    <Box sx={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover', height: '100%', width: '100%', zIndex: -2 }} component='video' playsInline autoPlay muted loop>
      <Box component='source' src={video} type='video/webm' />
    </Box>
  );
};

export default Video;
