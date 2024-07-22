import React from 'react';
import {
  Chip,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { PatternFormat } from 'react-number-format';
import MainCard from 'components/MainCard';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import { AimOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import WelcomeBanner from 'sections/dashboard/analytics/WelcomeBanner';

const TabProfile = () => {
  const matchDownMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const theme = useTheme();
  const profileData = {
    fullName: 'Santhosh Kumar J',
    fatherName: 'Jeevananthan M',
    phone: '7358082487',
    country: 'India',
    address: '112/1 school street, Krishnapuram, Sholinghure',
    zipCode: '631102',
    email: 'santhoshkumar13061@gmail.com',
    website: 'https://www.linkedin.com/in/santhosh-kumar-1352b8263',
    projects: 5,
    experience: '1 Year',
    aboutMe: 'Seeking an entry-level position to begin my career in a high-level professional environment.',
    skills: [
      { name: 'Python', percentage: 90 },
      { name: 'AngularJS', percentage: 50 },
      { name: 'JavaScript', percentage: 80 },
      { name: 'TypeScript', percentage: 80 },
      { name: 'HTML & CSS', percentage: 90 },
      { name: 'SQL & PostgreSQL', percentage: 90 },
      { name: 'Django', percentage: 70 },
      { name: 'AWS & GCP', percentage: 75 },
      { name: 'Node.js & Express.js', percentage: 80 },
      { name: 'React', percentage: 85 },
    ],
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <WelcomeBanner />
      </Grid>
      <Grid item xs={12} sm={5} md={4} xl={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack direction="row" justifyContent="space-around" alignItems="center">
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">Projects</Typography>
                      <Typography color="secondary">{profileData.projects}</Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">Experience</Typography>
                      <Typography color="secondary">{profileData.experience}</Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <List component="nav" aria-label="main mailbox folders" sx={{ py: 0, '& .MuiListItem-root': { p: 0, py: 1 } }}>
                    <ListItem>
                      <ListItemIcon>
                        <MailOutlined />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Grid container alignItems="center" justifyContent="flex-end">
                          <Typography align="right">{profileData.email}</Typography>
                        </Grid>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <PhoneOutlined />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Grid container alignItems="center" justifyContent="flex-end">
                          <PatternFormat value={profileData.phone} displayType="text" type="text" format="#### ### ###" />
                        </Grid>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <AimOutlined />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Grid container alignItems="center" justifyContent="flex-end">
                          <Typography align="right">{profileData.country}</Typography>
                        </Grid>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <EnvironmentOutlined />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Grid container alignItems="center" justifyContent="flex-end">
                          <Link href={profileData.website} target="_blank" rel="noopener">
                            www.linkedin.com/in/santhosh-kumar
                          </Link>
                        </Grid>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="Skills">
              <Grid container spacing={1.25}>
                {profileData.skills.map((skill) => (
                  <React.Fragment key={skill.name}>
                    <Grid item xs={6}>
                      <Typography color="secondary">{skill.name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <LinearWithLabel value={skill.percentage} />
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={7} md={8} xl={9}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard title="About me">
              <Typography color="secondary">{profileData.aboutMe}</Typography>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="Personal Details">
              <List sx={{ py: 0 }}>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Full Name</Typography>
                        <Typography>{profileData.fullName}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Father Name</Typography>
                        <Typography>{profileData.fatherName}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Phone</Typography>
                        <Typography>
                          <PatternFormat value={profileData.phone} displayType="text" type="text" format="#### ### ###" />
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Country</Typography>
                        <Typography>{profileData.country}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Address</Typography>
                        <Typography>{profileData.address}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Zip/Postal Code</Typography>
                        <Typography>{profileData.zipCode}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TabProfile;
