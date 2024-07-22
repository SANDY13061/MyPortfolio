import React from 'react';
import { Grid, Container } from '@mui/material';
import Projects from './projects';
import Contact from './Skills';
import WelcomeBanner from 'sections/dashboard/analytics/WelcomeBanner';
import TabProfile from 'sections/apps/profiles/account/TabProfile';


const User = () => {
  return (
    // <Container>
    //   <Grid container spacing={4}>
    //     {/* Portfolio Banner */}
    //     <Grid item xs={12}>
    //     <WelcomeBanner/>
    //     </Grid>
        
    //     {/* Skills Section */}
    //     <Grid item xs={12} md={6}>
    //       <Skills />
    //     </Grid>
        
    //     {/* Projects Section */}
    //     <Grid item xs={12} md={6}>
    //       <Projects />
    //     </Grid>
        
    //     {/* Contact Section */}
    //     <Grid item xs={12}>
    //       <Contact />
    //     </Grid>
    //   </Grid>
    // </Container>
    <TabProfile></TabProfile>
  );
};

export default User;
