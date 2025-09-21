import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';

function HomePage() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h3" gutterBottom>
        Портфоліо QA Automation Інженера
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Мене звати Артем Максимов, і я — QA Automation інженер з досвідом у тестуванні веб та мобільних додатків.
      </Typography>
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Навички та технології
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Automation Frameworks</Typography>
            <ul>
              <li>Selenium WebDriver (Java/Python)</li>
              <li>Cypress / Playwright (JavaScript)</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Тестування API</Typography>
            <ul>
              <li>Postman</li>
              <li>Rest-assured</li>
              <li>JMeter</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Інші інструменти</Typography>
            <ul>
              <li>Git</li>
              <li>Jenkins / GitLab CI/CD</li>
              <li>Docker</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Методології</Typography>
            <ul>
              <li>Agile/Scrum</li>
              <li>CI/CD</li>
              <li>Test-Driven Development (TDD)</li>
            </ul>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default HomePage;