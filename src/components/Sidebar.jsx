import React, { useEffect, useState } from 'react';
import { useMediaQuery, Box, Divider, Typography, FormControl, Input, InputLabel, Button, Select, MenuItem } from '@mui/material';
import RangeSlider from './RangeSlider';

let breedList;
const resultsPaginationNumber = [5, 10, 15, 20, 25];
const sortInfo = [
  {
    label: 'Ascending by age',
    value: 'age:asc',
  },
  {
    label: 'Descending by age',
    value: 'age:desc',
  },
  {
    label: 'Ascending by name',
    value: 'name:asc',
  },
  {
    label: 'Descending by name',
    value: 'name:desc',
  },
];

const Sidebar = ({ setSearchParams }) => {
  const [error, setError] = useState(false);
  const [searchTerms, setSearchTerms] = useState({
    breeds: '',
    zipCodes: '',
    ageMin: 0,
    ageMax: 20,
    size: '',
    sort: '',
    from: '',
  });
  const isNonMobile = useMediaQuery('(min-width: 580px)');

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
        breedList = data;
      } catch (err) {
        console.error(err);
      }
    };

    fetchBreedList();
  }, []);

  const searchChangeHandler = e => {
    const { name, value } = e.target;
    setSearchTerms(prev => ({ ...prev, [name]: value }));
  };

  const searchSubmitHandler = e => {
    setError(false);
    e.preventDefault();
    if (searchTerms.zipCodes.trim().length !== 5 && searchTerms.zipCodes.trim().length > 0) {
      setError(true);
      return;
    }
    let searchParams = {};

    for (let key in searchTerms) {
      if (searchTerms[key] !== '') {
        searchParams[key] = searchTerms[key];
      }
    }

    setSearchParams(searchParams);
  };

  return (
    <Box component='aside' width={isNonMobile ? '30%' : '100%'} border='1px solid rgb(0, 0, 128)' backgroundColor='rgb(240, 234, 214)' p={1}>
      <Typography component='h3' variant='title' color='rgb(0, 0, 128)'>
        Search
      </Typography>
      <Divider />
      <Box component='form' onSubmit={searchSubmitHandler} mt={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <FormControl sx={{ backgroundColor: 'white' }} fullWidth>
          <InputLabel htmlFor='breeds'>Breeds</InputLabel>
          <Select name='breeds' onChange={searchChangeHandler} labelId='breeds' value={searchTerms.breeds} label='Breed'>
            {breedList?.map((breed, index) => (
              <MenuItem key={`${breed}: ${index}`} value={breed}>
                {breed}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant='standard' sx={{ backgroundColor: 'white', borderRadius: '.25rem .25rem 0 0' }} fullWidth>
          <InputLabel htmlFor='zip'>Zip Code</InputLabel>
          <Input onChange={searchChangeHandler} id='zip' name='zipCodes' type='number' sx={{ fontSize: '.9rem' }} />
          {error && <Typography sx={{ color: 'red', fontSize: '.75rem' }}>Zip Code must be exactly 5 digits</Typography>}
        </FormControl>
        <Box mt={3} width={'100%'} border='1px solid rgb(0, 0, 128)' backgroundColor='white' p={3} borderRadius='1.25rem'>
          <Typography component='p' variant='body1'>
            Age Range
          </Typography>
          <RangeSlider value={[searchTerms.ageMin, searchTerms.ageMax]} setSearchTerms={setSearchTerms} />
        </Box>

        <FormControl variant='standard' sx={{ backgroundColor: 'white' }} fullWidth>
          <InputLabel htmlFor='size'># of Results</InputLabel>
          <Select name='size' onChange={searchChangeHandler} labelId='size' value={searchTerms.size} label='Size'>
            {resultsPaginationNumber.map(number => (
              <MenuItem key={number} value={number}>
                {number}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant='standard' sx={{ backgroundColor: 'white' }} fullWidth>
          <InputLabel htmlFor='sort'>Sort By</InputLabel>
          <Select name='sort' onChange={searchChangeHandler} labelId='sort' value={searchTerms.sort} label='Sort'>
            {sortInfo.map((sortItem, i) => (
              <MenuItem key={sortItem.value} value={sortItem.value}>
                {sortItem.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant='contained'
          type='submit'
          sx={{ mt: 3, backgroundColor: 'rgb(0, 0, 128)', color: 'rgb(240, 234, 214)', fontWeight: 'bold', '&:hover': { backgroundColor: 'rgb(0, 0, 100)' } }}>
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
