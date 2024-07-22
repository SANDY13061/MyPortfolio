import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import {
  useMediaQuery,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  Tooltip
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import SimpleBar from 'components/third-party/SimpleBar';
import { PatternFormat } from 'react-number-format';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PopupTransition } from 'components/@extended/Transitions';


// assets
import { DownloadOutlined } from '@ant-design/icons';
import ListCard from 'sections/apps/customer/exportpdf/ListCard';

// ==============================|| PROJECT PREVIEW ||============================== //

export default function ProjectPreview({ project, open, onClose }) {
  const matchDownMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
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
          <DialogTitle sx={{ px: 0 }}>
            <List sx={{ width: 1, p: 0 }}>
              <ListItem
                disablePadding
                secondaryAction={
                  <Stack direction="row" alignItems="center" justifyContent="center" spacing={0}>
                    {/* <PDFDownloadLink document={<ListCard project={project} />} fileName={`Project-${project.name}.pdf`}>
                      <Tooltip title="Export">
                        <IconButton color="secondary">
                          <DownloadOutlined />
                        </IconButton>
                      </Tooltip>
                    </PDFDownloadLink> */}
                  </Stack>
                }
              >
                <ListItemAvatar sx={{ mr: 0.75 }}>
                  <Avatar
                    alt={project.name}
                    size="lg"
                    src={`https://yourimageurl.com/${project.avatar}`} // Replace with actual avatar URL or logic
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography variant="h5">{project.name}</Typography>}
                  secondary={<Typography color="secondary">{project.role}</Typography>}
                />
              </ListItem>
            </List>
          </DialogTitle>
          <DialogContent dividers sx={{ px: 0 }}>
            <SimpleBar sx={{ height: 'calc(100vh - 290px)' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={8} xl={9}>
                  <Grid container spacing={2.25}>
                    <Grid item xs={12}>
                      <MainCard title="About">
                        <Typography>{project.description}</Typography>
                      </MainCard>
                    </Grid>
                    <Grid item xs={12}>
                    <MainCard>
                    <Stack spacing={2}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Project Link</Typography>
                        <Typography>
                          <Link href={project.projectLink} target="_blank" sx={{ textTransform: 'lowercase' }}>
                            {project.projectLink}
                          </Link>
                        </Typography>
                      </Stack>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Source Code</Typography>
                        <Typography>
                          <Link href={project.sourceCode} target="_blank" sx={{ textTransform: 'lowercase' }}>
                            {project.sourceCode}
                          </Link>
                        </Typography>
                      </Stack>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Tools Used</Typography>
                        <Typography>{project.toolsUsed.join(', ')}</Typography>
                      </Stack>
                    </Stack>
                  </MainCard>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={4} xl={3}>
                <MainCard title="Skills Used">
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
                            <ListItem key={index} disablePadding sx={{ pr: 0.75, pb: 0.75 }}>
                              <Chip color="secondary" variant="outlined" size="small" label={skill} />
                            </ListItem>
                          ))}
                        </Box>
                      </MainCard>
                </Grid>
              </Grid>
            </SimpleBar>
          </DialogContent>
          <DialogActions>
            <Button color="error" onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}

ProjectPreview.propTypes = {
  project: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
