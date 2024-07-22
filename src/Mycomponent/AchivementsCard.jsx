import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Link,
  Stack,
  Typography
} from '@mui/material';

// assets
import { MoreOutlined } from '@ant-design/icons';
import CustomerModal from 'sections/apps/customer/CustomerModal';
import AlertCustomerDelete from 'sections/apps/customer/AlertCustomerDelete';
import ProjectPreview from './ProjectPreview';

// project import
import MainCard from 'components/MainCard';
import CertificatePreview from './certificatePreview';

// ==============================|| ACHIEVEMENT - CARD ||============================== //

const AchievementCard = ({ achievement }) => {
  const [open, setOpen] = useState(false);
  const [customerModal, setCustomerModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openAlert, setOpenAlert] = useState(false);

  const handleAlertClose = () => {
    setOpenAlert(!openAlert);
    handleMenuClose();
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const editCustomer = () => {
    setSelectedCustomer(achievement.customer);
    setCustomerModal(true);
  };

  return (
    <>
      <MainCard sx={{ height: 1, '& .MuiCardContent-root': { height: 1, display: 'flex', flexDirection: 'column' } }}>
        <Grid container spacing={2.25}>
          <Grid item xs={12}>
            <Typography variant="h5">{achievement.title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{achievement.description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <strong>Certification:</strong> {achievement.certification}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <strong>Knowledge Gained:</strong> {achievement.knowledgeGained}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  listStyle: 'none',
                  p: 0.5,
                  m: 0
                }}
                component="ul"
              >
                {achievement.skillsUsed.map((skill, index) => (
                  <Chip key={index} color="secondary" variant="outlined" size="small" label={skill} sx={{ mr: 1, mb: 1 }} />
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              justifyContent="space-between"
              sx={{ mt: 'auto', mb: 0, pt: 2.25 }}
            >
              <Button variant="outlined" size="small" onClick={handleClickOpen}>
                Certificate
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </MainCard>

      <CertificatePreview project={achievement} open={open} onClose={handleClose} editCustomer={editCustomer} />
      {/* <AlertCustomerDelete id={achievement.id} title={achievement.title} open={openAlert} handleClose={handleAlertClose} />
      <CustomerModal open={customerModal} modalToggler={setCustomerModal} customer={selectedCustomer} /> */}
    </>
  );
};

AchievementCard.propTypes = {
  achievement: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    certification: PropTypes.string,
    knowledgeGained: PropTypes.string,
    skillsUsed: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default AchievementCard;
