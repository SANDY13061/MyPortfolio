import React, { useState } from 'react';
import { Tree } from 'antd';
import PropTypes from 'prop-types';
import { Container, Grid, Box, Typography, Paper } from '@mui/material';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './ExperienceTree.css'; // Import the custom CSS file
import HoverSocialCard from 'components/cards/statistics/HoverSocialCard';
import { alpha, useTheme } from '@mui/material/styles';



const ExperienceTree = ({ data }) => {
  const [expandedKeys, setExpandedKeys] = useState([]);
  const theme = useTheme();


  const handleExpand = (key) => {
    setExpandedKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const renderTreeData = (items) =>
    items.map((item) => ({
      title: (
<Paper
          elevation={3}
          sx={{
            padding: 2,
            display: 'flex',
            alignItems: 'center',
            borderRadius: 2,
            backgroundColor: alpha(theme.palette.primary.main, 1.3), // Dim the theme primary color
            color: theme.palette.primary.contrastText, // Ensure the text color contrasts well
          }}
        >          <Box
            component="img"
            src={item.logo}
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              marginRight: 2,
            }}
          />
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {item.company}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {item.startDate} - {item.endDate}
            </Typography>
          </Box>

        </Paper>
      ),
      key: item.id,
      children: item.positions.map((pos) => ({
        title: (
          <Paper elevation={2} sx={{ padding: 2, marginTop: 2, borderRadius: 2 }}>
            <Grid container alignItems="center" fontSize="16px">
              <Grid item>
                <Box onClick={() => handleExpand(pos.id)} sx={{ cursor: 'pointer', mr: 1 }}>
                  {expandedKeys.includes(pos.id) ? (
                    <UpOutlined style={{ color: 'blue' }} /> // Blue color for expanded state
                  ) : (
                    <DownOutlined style={{ color: 'gray' }} /> // Gray color for collapsed state
                  )}
                </Box>
              </Grid>
              <Grid item xs>
                <Typography variant="h6" fontWeight="bold">
                  {pos.position}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {pos.startDate} - {pos.endDate}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {pos.description}
                </Typography>
                {/* <HoverSocialCard primary={`${pos.startDate} - ${pos.endDate}`} secondary={pos.position} color='black' /> */}

                {expandedKeys.includes(pos.id) && (
                    <HoverSocialCard primary={pos.fullDescription} secondary='Full Description:' color={theme.palette.primary.main} />

                )}
              </Grid>
            </Grid> 
          </Paper>
        ),
        key: pos.id,
      })),
    }));

  const treeData = renderTreeData(data);

  return (
    
        <Box fontSize="16px">
          <Tree
            showLine={{ showLeafIcon: false }}
            showIcon={false}
            defaultExpandAll
            treeData={treeData}
            style={{ fontSize: '16px' }}
          />
        </Box>

  );
};

ExperienceTree.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ExperienceTree;
