import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DogCard from './DogCard';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Main = ({ favoritesList, setFavoritesList, dogData, paginationData }) => {
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const from = +searchParams.get('from');
    const size = +searchParams.get('size');

    const disabledButton = async () => {
      const totalData = await paginationData?.total;
      if (size + from >= totalData) {
        setIsNextDisabled(true);
      } else {
        setIsNextDisabled(false);
      }
    };

    disabledButton();
  }, [searchParams, paginationData]);

  const changePageHandler = e => {
    const splitPath = paginationData[e.target.name].split('/search');
    const urlPath = splitPath.join('');
    navigate(urlPath);
  };

  return (
    <Box width='100%' component='main'>
      <Button name='prev' onClick={changePageHandler} disabled={!paginationData?.prev}>
        Prev
      </Button>
      <Button name='next' onClick={changePageHandler} disabled={isNextDisabled}>
        Next
      </Button>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {dogData.map(data => (
          <DogCard key={data.id} dogData={data} favoritesList={favoritesList} setFavoritesList={setFavoritesList} />
        ))}
      </Box>

      <Button name='prev' onClick={changePageHandler} disabled={!paginationData?.prev}>
        Prev
      </Button>
      <Button name='next' onClick={changePageHandler} disabled={isNextDisabled}>
        Next
      </Button>
    </Box>
  );
};

export default Main;
