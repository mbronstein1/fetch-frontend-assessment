import React from 'react';
import { Card, CardMedia, CardContent, Typography, Modal } from '@mui/material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95%',
  maxWidth: '500px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MatchModal = ({ isModalOpen, setIsModalOpen }) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal open={isModalOpen} onClose={handleClose} aria-labelledby='dog-match' aria-describedby='dog-description'>
      <Card sx={modalStyle}>
        <CardMedia component='img' alt='green iguana' height='140' image='/static/images/cards/contemplative-reptile.jpg' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default MatchModal;
