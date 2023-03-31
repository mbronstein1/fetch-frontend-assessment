import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const DogCard = ({ isFavorite, setIsFavorite, dogData: { id, age, breed, img, name, zip_code } }) => {
  const favoritesHandler = e => {
    if (isFavorite.includes(id)) {
      const newFavorites = isFavorite.filter(favorite => favorite !== id);
      setIsFavorite(newFavorites);
    } else {
      setIsFavorite(prev => [...prev, id]);
    }
  };

  return (
    <Card sx={{ flex: '1 1 300px' }}>
      <CardMedia component='img' alt={name} height='250' image={img} sx={{ objectFit: 'contain' }} />

      <CardContent>
        <Typography gutterBottom variant='h5' component='h3'>
          {name}
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          {breed}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {age} {(age = 1 ? 'year old' : 'years old')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={favoritesHandler}>{isFavorite.includes(id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}</Button>
      </CardActions>
    </Card>
  );
};

export default DogCard;
