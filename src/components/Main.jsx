import { Box } from '@mui/material';
import React from 'react';
import DogCard from './DogCard';

const Main = ({ isFavorite, setIsFavorite, dogData }) => {
  return (
    <Box width='100%' component='main' sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {dogData.map(data => (
        <DogCard key={data.id} dogData={data} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
      ))}
    </Box>
  );
};

export default Main;
