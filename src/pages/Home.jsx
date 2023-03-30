import { Box, Container } from '@mui/material';
import { useState, useEffect } from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/dogs/search`, {
          method: 'GET',
          headers: {
            'fetch-api-key': process.env.REACT_APP_API_KEY,
          },
          credentials: 'include',
        });

        const data = await response.json();
        console.log(data);

        const dogResponse = await fetch(`${process.env.REACT_APP_BASE_URL}/dogs`, {
          method: 'POST',
          headers: {
            'fetch-api-key': process.env.REACT_APP_API_KEY,
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(data.resultIds),
        });

        const dogData = await dogResponse.json();
        console.log(dogData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDogData();
  });

  return (
    <Box sx={{ display: 'flex', flex: '1 1 auto', textAlign: 'center', p: 5, gap: '1rem' }}>
      <Sidebar />
      <Container>
        <Main />
      </Container>
    </Box>
  );
};

export default Home;
