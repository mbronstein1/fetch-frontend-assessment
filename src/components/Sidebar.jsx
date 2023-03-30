import React, { useEffect, useState } from 'react';
import { Box, Divider, Typography, FormControl, Input, InputLabel, Button, Select, MenuItem } from '@mui/material';
import RangeSlider from './RangeSlider';

const Sidebar = () => {
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    const fetchBreedList = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/dogs/breeds`, {
          method: 'GET',
          headers: {
            'fetch-api-key': process.env.REACT_APP_API_KEY,
          },
          credentials: 'include',
        });

        const data = await response.json();
        setBreedList(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBreedList();
  }, []);
  return (
    <Box component='aside' width='30%' border='1px solid rgb(0, 0, 128)' backgroundColor='rgb(240, 234, 214)' p={5}>
      <Typography component='h3' variant='h6' color='rgb(0, 0, 128)'>
        Search
      </Typography>
      <Divider />
      <Box component='form' onSubmit='' mt={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <FormControl sx={{ backgroundColor: 'white' }} fullWidth>
          <InputLabel htmlFor='breed'>Breed</InputLabel>
          <Select labelId='breed' value='' label='Breed'>
            {breedList.map((breed, index) => (
              <MenuItem key={`${breed}: ${index}`} value={breed}>
                {breed}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant='standard' sx={{ backgroundColor: 'white', borderRadius: '.25rem .25rem 0 0' }} fullWidth>
          <InputLabel htmlFor='zip'>Zip Code</InputLabel>
          <Input id='zip' name='zip' type='text' pattern='[0-9]*' sx={{ fontSize: '.9rem' }} />
        </FormControl>
        <Box mt={3} border='1px solid rgb(0, 0, 128)' backgroundColor='white' p={3} borderRadius='1.25rem'>
          <Typography component='p' variant='body1'>
            Age Range
          </Typography>
          <RangeSlider />
        </Box>
        <Button
          variant='contained'
          type='submit'
          sx={{ mt: 3, backgroundColor: 'rgb(0, 0, 128)', color: 'rgb(240, 234, 214)', fontWeight: 'bold', '&:hover': { backgroundColor: 'rgb(0, 0, 100)' } }}>
          Enter Website
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
