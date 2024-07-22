import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import {
  Box,
  Button,
  Chip,
  Divider,
  Fade,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography
} from '@mui/material';

// third-party
import { PatternFormat } from 'react-number-format';
// import { PDFDownloadLink } from '@react-pdf/renderer';

// project import


import MainCard from 'components/MainCard';


// assets
import { EnvironmentOutlined, LinkOutlined, MailOutlined, MoreOutlined, PhoneOutlined } from '@ant-design/icons';
import CustomerModal from 'sections/apps/customer/CustomerModal';
import AlertCustomerDelete from 'sections/apps/customer/AlertCustomerDelete';
import CustomerPreview from 'sections/apps/customer/CustomerPreview';
import ProjectPreview from './ProjectPreview';

// ==============================|| CUSTOMER - CARD ||============================== //

const ProjectCard = ({project}) => {
  const [open, setOpen] = useState(false);
  const [customerModal, setCustomerModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const customer = {
    "id": "1",
    "name": "John Doe",
    "avatar": 3,
    "role": "Software Engineer",
    "email": "johndoe@example.com",
    "contact": "1234567890",
    "country": "USA",
    "firstName": "john",
    "about": "Welcome to my profile!",
    "skills": ["JavaScript", "React", "Node.js"],
    "time": "10:30 AM"
  }
  

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
    setSelectedCustomer(customer);
    setCustomerModal(true);
  };

  return (
    <>
<MainCard sx={{ height: 1, '& .MuiCardContent-root': { height: 1, display: 'flex', flexDirection: 'column' } }}>
      <Grid container spacing={2.25}>
        <Grid item xs={12}>
          <Typography>{project.description}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <strong>Source Code:</strong>{' '}
            <Link href={project.sourceCode} target="_blank">
              {project.sourceCode}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <strong>Project Link:</strong>{' '}
            <Link href={project.projectLink} target="_blank">
              {project.projectLink}
            </Link>
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
              {project.skillsUsed.map((skill, index) => (
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
              Preview
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </MainCard>

      <ProjectPreview project={project} open={open} onClose={handleClose} editCustomer={editCustomer} />
      <AlertCustomerDelete id={customer.id} title={customer.name} open={openAlert} handleClose={handleAlertClose} />
      <CustomerModal open={customerModal} modalToggler={setCustomerModal} customer={selectedCustomer} />
    </>
  );
};

ProjectCard.propTypes = {
  customer: PropTypes.object
};

export default ProjectCard;
