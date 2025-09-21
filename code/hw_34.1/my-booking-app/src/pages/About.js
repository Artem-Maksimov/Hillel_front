import React from 'react';
import { Typography } from '@mui/material';

const About = () => {
  return (
    <div className="about-container">
      <Typography variant="h4" gutterBottom>
        Про нас
      </Typography>
      <Typography variant="body1">
        Ми — команда, яка створює найкращий сервіс для бронювання готелів. Наша мета — зробити вашу подорож комфортною та незабутньою.
      </Typography>
    </div>
  );
};

export default About;