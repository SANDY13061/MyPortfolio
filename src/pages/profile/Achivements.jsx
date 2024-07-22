import React from 'react';
import { Grid } from '@mui/material';
import AchievementCard from 'Mycomponent/AchivementsCard';
import img from 'assets/images/Portfolio/test.png'
import bhel from 'assets/images/Portfolio/bhel.jpeg'
import ibmnan from 'assets/images/Portfolio/ibmnanmudhlvan.jpeg'
import nptl from 'assets/images/Portfolio/nptl.jpeg'
import aws from 'assets/images/Portfolio/aws.jpg'
import college from 'assets/images/Portfolio/college.jpeg'
import pyspider from 'assets/images/Portfolio/pyspider.jpg'


const Achivements = () => {
  const achievements = [
    {
      "title":"Python Fullstack Development",
      "description": "Completed a specialized course focusing on full-stack development using Python.",
      "certification": "Pyspider Certificate",
      "knowledgeGained": "Gained expertise in full-stack development using Python.",
      "skillsUsed": ["Python", "Django", "RestAPI","HTML","CSS","JavaScript","SQL","PostgreSQL","Angular","NodeJS","TypeScript","Mysql"],
      "img":pyspider
    },
    {
      "title":"Bachelor of Engineering in Electronics and Communication Engineering (ECE),B.E.",
      "description": "Completed with first class in Bachelor of Engineering in Electronics and Communication Engineering (ECE) from Anna University.",
      "certification": "Anna University Certificate",
      "knowledgeGained": "Gained expertise in Electronics and Communication Engineering.",
      "skillsUsed": ["Angular", "python", "C Programming","IoT","Embedded Systems","VLSI"],
      "img":college

    },
    {
      "title":"Aws cloud",
      "description": "Completed a specialized course focusing on cloud computing using Aws.",
      "certification": "Aws Certificate",
      "knowledgeGained": "Gained expertise in cloud computing using Aws.",
      "skillsUsed": ["Aws", "EC2", "S3","RDS","IAM"],
      "img":aws
    },
    
    {
      "title": "Problem Solving Through Programming In C",
      "description": "Completed a specialized course focusing on problem-solving techniques using C programming language.",
      "certification": "NPTEL Certificate",
      "knowledgeGained": "Gained expertise in problem-solving techniques using C programming language.",
      "skillsUsed": ["C Programming", "Problem Solving"],
      'img':nptl
    },
    {
      "title": "Project Based Learning",
      "description": "Completed a specialized course focusing on project-based learning,through ibm.",
      "certification": "NanMudhalvan ,Nasscom and ICT Academy of Tamil Nadu Certificate",
      "knowledgeGained": "Gained expertise in project-based learning.",
      "skillsUsed": ["NODE RED", "MIT App Inventor", "IBM Cloud", "IoT"],
      "img":ibmnan
    },
    {
      "title": "Internship Training",
      "description": "Completed a specialized course focusing on internship training in BHEL,Ranipet.",
      "certification": "BHEL Certificate",
      "knowledgeGained": "Gained expertise in internship training.",
      "skillsUsed": ["Internship Training", "BHEL","Time Management","Purchase Management"],
      "img":bhel
    },
    // {
    //   "title": "Spot Award",
    //   "description": "Awarded for outstanding performance in the project in Purpledata inc",
    //   "certification": "Purpledata Certificate",
    //   "knowledgeGained": "Gained expertise in project performance.",
    //   "skillsUsed": ["React Query", "flask","AWS","GCP","Apache Superset"]

    // }
  ];

  return (
    <div>
      <h1>Achievements</h1>
      <Grid container spacing={2}>
        {achievements.map((achievement, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <AchievementCard achievement={achievement} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Achivements;
