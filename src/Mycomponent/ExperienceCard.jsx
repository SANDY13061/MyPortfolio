// components/ExperienceCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

const ExperienceCard = ({ experience, onClick }) => {
  return (
    <Card sx={{ display: 'flex', mb: 2, cursor: 'pointer' }} onClick={() => onClick(experience)}>
      <CardMedia
        component="img"
        sx={{ width: 80, height: 80, m: 2 }}
        image={experience.logo}
        alt={`${experience.company} logo`}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent>
          <Typography variant="h6">{experience.position}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {experience.company}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ExperienceCard;
