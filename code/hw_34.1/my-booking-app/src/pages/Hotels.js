import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const Hotels = () => {
  const hotels = useSelector(state => state.hotels.list);

  return (
    <div className="hotels-container">
      <Typography variant="h4" gutterBottom>
        Знайдено готелі
      </Typography>
      <Grid container spacing={3}>
        {hotels.length > 0 ? (
          hotels.map(hotel => (
            <Grid item xs={12} sm={6} md={4} key={hotel.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={hotel.imageUrl}
                  alt={hotel.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {hotel.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {hotel.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ mt: 3, ml: 3 }}>
            Не знайдено готелів за вашим запитом.
          </Typography>
        )}
      </Grid>
    </div>
  );
};

export default Hotels;