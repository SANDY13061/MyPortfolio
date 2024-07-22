import PropTypes from 'prop-types';
import { useState } from 'react';
import { Dialog, Box, DialogTitle, DialogContent, Grid, Typography, CardMedia, DialogActions, Button } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import { PopupTransition } from 'components/@extended/Transitions';

// ==============================|| CERTIFICATE PREVIEW ||============================== //

export default function CertificatePreview({ project, open, onClose }) {
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = () => {
    setOpenAlert(!openAlert);
    onClose();
  };

  return (
    <>
      <Dialog
        open={open}
        keepMounted
        onClose={onClose}
        TransitionComponent={PopupTransition}
        aria-describedby="alert-dialog-slide-description"
        sx={{ '& .MuiDialog-paper': { width: 1024, maxWidth: 1, m: { xs: 1.75, sm: 2.5, md: 4 } } }}
      >
        <Box id="PopupPrint" sx={{ px: { xs: 2, sm: 3, md: 5 }, py: 1 }}>
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 0 }}>
            <Typography variant="h5" align="center" sx={{ flex: 1 }}>{project.title}</Typography>
            <DialogActions>
              <Button color="error" onClick={handleClose}>
                Close
              </Button>
            </DialogActions>
          </DialogTitle>
          <DialogContent >
            <Grid container justifyContent="center">
              <Grid item>
                <MainCard>
                  <CardMedia
                    component="img"
                    alt={project.title}
                    image={project.img} // Use the actual certificate URL
                    title={project.title}
                    sx={{ width: '100%', height: 'auto' }}
                  />
                </MainCard>
              </Grid>
            </Grid>
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
}

CertificatePreview.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
