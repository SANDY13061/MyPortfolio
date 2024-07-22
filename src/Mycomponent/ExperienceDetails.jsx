import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';

function ExperienceDetailsCard({ experience }) {
  if (!experience) return <Typography>Select an experience to see details</Typography>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{experience.position}</Typography>
        <Typography variant="body2">{experience.company}</Typography>
        <Typography variant="body2">{experience.startDate} - {experience.endDate}</Typography>
        <Typography variant="body2">{experience.description}</Typography>
      </CardContent>
    </Card>
  );
}

ExperienceDetailsCard.propTypes = {
  experience: PropTypes.object
};

export default ExperienceDetailsCard;
