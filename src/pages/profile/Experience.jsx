import React, { useState } from 'react';
import { Container, Grid, Box, Typography, Divider } from '@mui/material';
import ExperienceTree from 'Mycomponent/ExperienceTree';
import WelcomeImage from 'assets/images/Portfolio/pdi.jpeg';
import pyspider from 'assets/images/Portfolio/Pyspiders.jpeg';
import HoverSocialCard from 'components/cards/statistics/HoverSocialCard';
import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { alpha, useTheme } from '@mui/material/styles';


const experienceData = [
  {
    id: 1,
    company: "Purple Data Inc",
    startDate: "January 2024",
    endDate: "Present",
    logo: WelcomeImage,
    positions: [
      {
        id: 2,
        position: "Team Lead - Frontend",
        startDate: "May 2024",
        endDate: "Present",
        description: "Led the frontend team in developing applications using React, TypeScript, and MUI.",
        fullDescription: "Led the frontend team in developing applications using React, TypeScript, and MUI. Also worked on the design and implementation of the company's design system. Developed and maintained backend services and APIs using AWS (Lambda, EC2, S3, RDS, DynamoDB, API Gateway, CloudWatch, boto3) and GCP (Cloud Functions, Compute Engine, Cloud Storage, Cloud SQL) resources, implemented MySQL data storage solutions, optimized performance, ensured code quality, and collaborated with cross-functional teams; achieved integration of AWS and GCP APIs for automation, designed MySQL data storage architecture, developed RESTful APIs, implemented monitoring with CloudWatch and Stackdriver, and contributed to a scalable microservices architecture with AWS Lambda and GCP Cloud Functions.",
        logo: "path/to/purpleDataIncLogo.png",
      },
      {
        id: 3,
        position: "Backend Developer",
        startDate: "January 2024",
        endDate: "May 2024",
        description: "Worked on various backend projects using Python, Django, and PostgreSQL.",
        fullDescription: "Worked on various backend projects using Python, Django, and PostgreSQL. Also worked on the design and implementation of the company's design system.",
        logo: "path/to/purpleDataIncLogo.png",
      }
    ]
  },
  {
    id: 4,
    company: "Pyspider",
    startDate: "June 2023",
    endDate: "January 2024",
    logo: pyspider,
    positions: [
      {
        id: 5,
        position: "Trainee",
        startDate: "June 2018",
        endDate: "December 2019",
        description: "Python Fullstack Development",
        logo: "path/to/logoB.png",
      }
    ]
  }
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const theme = useTheme();


  return (
   
    <Container sx={{ mt: 4, p: 2,backgroundColor: alpha(theme.palette.primary.main, 0.3)      , borderRadius: '8px' }}>
      
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Professional Experience
      </Typography>
      
      <Divider sx={{ mb: 2 }} />
      <Box mt={4} sx={{ backgroundColor: '#ffffff', p: 3, borderRadius: '8px', boxShadow: 3 }}>
      <ExperienceTree data={experienceData} />

      </Box>
      <Box mt={4} sx={{ backgroundColor: '#ffffff', p: 3, borderRadius: '8px', boxShadow: 3 }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Key Highlights
        </Typography>
        <Typography variant="body1" paragraph>
          • Developed and maintained backend services and APIs using AWS and GCP resources.
        </Typography>
        <Typography variant="body1" paragraph>
          • Implemented data storage solutions with MySQL, optimized performance, and ensured code quality.
        </Typography>
        <Typography variant="body1" paragraph>
          • Achieved integration of AWS and GCP APIs for automation and designed data storage architecture.
        </Typography>
      </Box>
    </Container>
  );
};

export default Experience;
