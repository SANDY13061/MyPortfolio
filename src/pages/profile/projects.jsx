import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  CardContent,
  Grid,
  Link,
  Typography,
  IconButton,
  Collapse,
  Divider,
  Stack,
  Button,
  Menu,
  MenuItem,
  Fade
} from '@mui/material';
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import { CodeOutlined, FileOutlined, GithubOutlined, ProjectOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import CustomerCard from 'sections/apps/customer/CustomerCard';
import ProjectCard from 'Mycomponent/ProjectCard';

// Project data
const projects = [
  {
   "name":"Vendor Management System",
    company: "",
    title: "Vendor Management System",
    description: "The major goal is to create a vendor management system that helps to manage the vendor details and their products. The system is developed using the django",
    sourceCode: "https://github.com/SANDY13061/VendorManagement.git",
    projectLink: "",
    skillsUsed: ["Djanog", "Python", "RestApi"],
    toolsUsed: ["VsCode", "GitHub"],
    avatar: 3,

  },
  {
    "name": "USER AUTHENTICATION USING ANGULAR",
    company: "Upskill-Angular",
    title: "USER AUTHENTICATION USING ANGULAR",
    description: "The major goal is to create login page and register page and create tsserver connected to PostgreSQL ,using http and cors sending the register data to the table and check the data entered in the login page ,if the data is correct it route to the main page of the website ,else it shows an error in the webpage",
    sourceCode: "https://github.com/SANDY13061/angular_fullstack",
    projectLink: "https://sandy13061.netlify.app",
    skillsUsed: ["Angular", "PostgreSQL", "HTTP", "CORS"],
    toolsUsed: ["Angular", "PostgreSQL", "HTTP", "CORS"],
    avatar: 3,
  },
  {
    "name": "Real-Time River Water Quality Monitoring",
    avatar: 3,
    company: "IBM",
    title: "Real-Time River Water Quality Monitoring",
    description: "The major goal is to create a system that continuously monitor river water quality. IoT based water quality monitoring system is the technology used in the project",
    sourceCode: "https://github.com/IBM-EPBL/IBM-Project-19778-1659706367",
    projectLink: "https://youtu.be/4bl-s7Y_f9g",
    skillsUsed: ["IoT", "python"],
    toolsUsed: ["NodeRed", "Ibm Cloud", "MIT"],
  },
  {
    "name": "SMART MEDICINE BOX USING IOT FOR MEDICATION MONITORING SYSTEM",
    avatar: 3,
    company: "Final Year Project",
    title: "SMART MEDICINE BOX USING IOT FOR MEDICATION MONITORING SYSTEM",
    description: "The smart medicine box helps the patient to take the right medicine at the right time along with an alert message which will help the patient to take the medicine",
    sourceCode: "",
    projectLink: "",
    skillsUsed: ["IoT", "python"],
    toolsUsed: ["Ardino", "sensor", "MIT"],
  },
  
];

 


// ==========================|| PROJECTS LIST ||========================== //

const Projects = () => {
  const [expanded, setExpanded] = useState(Array(projects.length).fill(false));
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleExpandClick = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const handleMenuClick = (event, project) => {
    setSelectedProject(project);
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <MainCard title="Projects" content={false}>
      <CardContent>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar color="primary">
                    <CodeOutlined />
                  </Avatar>
                </Grid>
                <Grid item xs>
                  <Typography variant="h6" color="textPrimary">
                    {project.company}
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary">
                    {project.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton onClick={() => handleExpandClick(index)} size="small">
                    {expanded[index] ? <UpOutlined /> : <DownOutlined />}
                  </IconButton>
                </Grid>
              </Grid>
              <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              
                <ProjectCard project={project} />
              </Collapse>
            </Grid>
          ))}
        </Grid>
      </CardContent>
      
    </MainCard>
  );
};

export default Projects;
