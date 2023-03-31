import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import useFetchDogData from '../hooks/useFetchDogData';

const Home = () => {
  const { isLoading, error, dogData, fetchDogData } = useFetchDogData();
  const [isFavorite, setIsFavorite] = useState([]);
  const isNonMobile = useMediaQuery('(min-width: 580px)');

  useEffect(() => {
    fetchDogData();
  }, [fetchDogData]);

  return (
    <Box sx={{ display: 'flex', flexDirection: isNonMobile ? 'row' : 'column', flex: '1 1 auto', textAlign: 'center', p: 1, gap: '1rem' }}>
      <Sidebar />
      {isLoading && (
        <Typography component='p' variant='h6'>
          Loading...
        </Typography>
      )}
      {error && !isLoading && (
        <Typography component='p' variant='h6'>
          {error}
        </Typography>
      )}
      {!isLoading && !error && dogData && <Main isFavorite={isFavorite} setIsFavorite={setIsFavorite} dogData={dogData} />}
    </Box>
  );
};

export default Home;
