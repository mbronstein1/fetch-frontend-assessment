import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const valuetext = value => {
  return `${value} year(s) old`;
};

const RangeSlider = () => {
  const [value, setValue] = useState([0, 20]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        sx={{ color: 'rgb(0, 0, 128)' }}
        marks
        min={0}
        max={20}
        getAriaLabel={() => 'Age range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='on'
        getAriaValueText={valuetext}
      />
    </Box>
  );
};

export default RangeSlider;
