import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import SkillsChart from 'Mycomponent/Skillschart';
import SkillsTables from 'Mycomponent/SkillsTable';

const Skills = () => {
  const skillData = [
    // Frontend
    {
      name: 'React',
      proficiency: 85,
      category: 'Frontend',
      description: 'Experience with building dynamic user interfaces using React. Proficient in using hooks (useState, useEffect, useContext), managing component state, props, lifecycle methods, and optimizing performance with React.memo and useCallback.'
    },
    {
      name: 'React Query',
      proficiency: 80,
      category: 'Frontend',
      description: 'Skilled in data-fetching with React Query. Expertise in caching, background data synchronization, pagination, and handling complex server-state scenarios efficiently.'
    },
    {
      name: 'MUI',
      proficiency: 75,
      category: 'Frontend',
      description: 'Proficient in using Material-UI (MUI) for building responsive and aesthetically pleasing user interfaces. Experience with MUI components, theming, and custom styling using the styled API and makeStyles.'
    },
    {
      name: 'Angular',
      proficiency: 70,
      category: 'Frontend',
      description: 'Experience with Angular for building robust and scalable web applications. Proficient in using Angular modules, components, services, RxJS for reactive programming, and Angular CLI for project management.'
    },
    {
      name: 'JavaScript',
      proficiency: 90,
      category: 'Frontend',
      description: 'Strong understanding of JavaScript fundamentals, including ES6+ features. Proficient in closures, asynchronous programming (Promises, async/await), DOM manipulation, and event handling.'
    },
    {
      name: 'Node.js',
      proficiency: 85,
      category: 'Frontend',
      description: 'Experience with building server-side applications using Node.js. Proficient in using Express.js for creating RESTful APIs, handling middleware, and working with file systems and databases.'
    },
    {
      name: 'TypeScript',
      proficiency: 80,
      category: 'Frontend',
      description: 'Skilled in using TypeScript to enhance JavaScript with static types. Proficient in type annotations, interfaces, generics, and integrating TypeScript with React and Node.js for improved code quality and maintainability.'
    },
    {
      name: 'REST API',
      proficiency: 75,
      category: 'Frontend',
      description: 'Experience in designing and consuming RESTful APIs. Proficient in using HTTP methods, status codes, request/response headers, and tools like Postman for testing APIs.'
    },
    // Backend
    {
      name: 'Python',
      proficiency: 95,
      category: 'Backend',
      description: 'Extensive experience with Python for various applications, including web development, scripting, and data analysis. Proficient in using libraries like NumPy, Pandas, and Flask, and writing clean, efficient, and maintainable code.'
    },
    {
      name: 'Django',
      proficiency: 90,
      category: 'Backend',
      description: 'Proficient in building web applications with Django. Experience with Django ORM, templating, authentication, and REST framework for building robust APIs. Skilled in deploying Django applications and using Django Admin for backend management.'
    },
    {
      name: 'DSA',
      proficiency: 85,
      category: 'Backend',
      description: 'Strong knowledge of Data Structures and Algorithms. Proficient in implementing and optimizing algorithms for sorting, searching, dynamic programming, and graph traversal. Experience with solving complex problems in competitive programming.'
    },
    {
      name: 'Flask',
      proficiency: 80,
      category: 'Backend',
      description: 'Experience with building lightweight web applications using Flask. Proficient in creating RESTful APIs, handling routes, managing sessions, and integrating with databases using SQLAlchemy.'
    },
    {
      name: 'Pandas',
      proficiency: 90,
      category: 'Backend',
      description: 'Expert in using Pandas for data manipulation and analysis. Skilled in handling dataframes, performing data cleaning, transformation, and aggregation operations, and working with time series data.'
    },
    // Database
    {
      name: 'SQL',
      proficiency: 85,
      category: 'Database',
      description: 'Strong knowledge of SQL for querying and managing relational databases. Proficient in writing complex queries, joins, subqueries, and using indexing and normalization techniques to optimize database performance.'
    },
    {
      name: 'MySQL',
      proficiency: 80,
      category: 'Database',
      description: 'Experience with MySQL for database management. Skilled in designing schemas, writing stored procedures, triggers, and performing backup and recovery operations.'
    },
    {
      name: 'PostgreSQL',
      proficiency: 75,
      category: 'Database',
      description: 'Proficient in using PostgreSQL for advanced database management. Experience with JSONB, full-text search, and using extensions like PostGIS for spatial data analysis.'
    },
    // Cloud
    {
      name: 'Git',
      proficiency: 90,
      category: 'Cloud',
      description: 'Expert in using Git for version control. Proficient in branching, merging, resolving conflicts, and using Git workflows like Gitflow. Experience with using Git for collaborative development and code review processes.'
    },
    {
      name: 'GitHub',
      proficiency: 85,
      category: 'Cloud',
      description: 'Skilled in using GitHub for hosting repositories, managing issues, pull requests, and using GitHub Actions for CI/CD pipelines. Experience with collaborating on open-source projects and using GitHub Pages for static site hosting.'
    },
    {
      name: 'Shell Script',
      proficiency: 80,
      category: 'Cloud',
      description: 'Experience with writing shell scripts for automating tasks and managing system operations. Proficient in using bash scripting for file manipulation, process management, and task scheduling.'
    },
    {
      name: 'AWS',
      proficiency: 75,
      category: 'Cloud',
      description: 'Experience with Amazon Web Services (AWS) for cloud computing. Proficient in using EC2, S3, RDS, and Lambda for deploying and managing scalable applications. Knowledge of AWS IAM for managing user permissions and security.'
    },
    {
      name: 'GCP',
      proficiency: 70,
      category: 'Cloud',
      description: 'Experience with Google Cloud Platform (GCP) for deploying and managing applications. Proficient in using GCP services like Compute Engine, Cloud Storage, and BigQuery for data analysis and processing.'
    }
  ];
 
  
  return (
    <div>
      <div>
      <SkillsChart data={skillData}  />
      </div>
      <div style={{'height':'50px'} }>

      </div>
      <div>
      <SkillsTables skillData={skillData} />
      </div>
     

      
    </div>

  );
};

export default Skills;
