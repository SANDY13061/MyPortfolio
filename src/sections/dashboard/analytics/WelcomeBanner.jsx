import { Grid, Typography, Stack, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import MainCard from 'components/MainCard';
import { ThemeDirection } from 'config';

// asset
import WelcomeImage from 'assets/images/Portfolio/test.png';

const WelcomeBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MainCard
      border={false}
      sx={{
        background:
          theme.direction === ThemeDirection.RTL
            ? `linear-gradient(60.38deg, ${theme.palette.primary.lighter} 114%, ${theme.palette.primary.light} 34.42%, ${theme.palette.primary.main} 60.95%, ${theme.palette.primary.dark} 84.83%, ${theme.palette.primary.darker} 104.37%)`
            : `linear-gradient(250.38deg, ${theme.palette.primary.lighter} 2.39%, ${theme.palette.primary.light} 34.42%, ${theme.palette.primary.main} 60.95%, ${theme.palette.primary.dark} 84.83%, ${theme.palette.primary.darker} 104.37%)`
      }}
    >
      <Grid container alignItems="center">
        <Grid item sm={6} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              width: isMobile ? '100%' : 400, // Adjust image width for mobile
              height: isMobile ? '100%' : 'auto', // Adjust image height for mobile
              overflow: 'hidden', // Hide overflow for rounded corners
              position: 'relative',
              pr: { sm: 1, md: 30 }
            }}
          >
            <Box
              component="img"
              src={WelcomeImage}
              alt="Welcome"
              sx={{
                width: 200,
                height: 200,
                borderRadius: isMobile ? '50%' : '50%', // Apply border radius for mobile

                objectFit: 'cover'
              }}
            />
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Stack spacing={2} sx={{ textAlign: isMobile ? 'center' : 'left', px: { xs: 2, sm: 0 } }}>
            <Typography variant="h2" color={theme.palette.background.paper}>
              Santhosh Kumar , B.E.
            </Typography>
            <Typography variant="body1" color={theme.palette.background.paper}>
              Electronics and Communication | Frontend Team Lead | Backend Developer
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default WelcomeBanner;
