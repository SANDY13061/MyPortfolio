import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Radio, RadioGroup, FormControl, FormControlLabel, Stack, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';
import ReactApexChart from 'react-apexcharts';

const SkillsChart = ({ data }) => {
  const theme = useTheme();
  const { mode } = useConfig();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [series, setSeries] = useState([]);
  const xsDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [options, setOptions] = useState({
    chart: {
      type: 'bar',
      height: 430,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '30%',
        borderRadius: 4
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: []
    },
    yaxis: {
      title: {
        text: 'Proficiency Level'
      },
      min: 0,
      max: 100
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val, { seriesIndex, dataPointIndex, w }) {
          const skillName = w.config.xaxis.categories[dataPointIndex];
          const skillDesc = w.config.skillData.find(skill => skill.name === skillName).description;
          return `${val}%  `;
        }
      }
    },
    legend: {
      show: false
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          yaxis: {
            show: false
          }
        }
      }
    ],
    skillData: data // Adding skill data here
  });

  useEffect(() => {
    setSeries(getFilteredData());
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const getFilteredData = () => {
    const filteredData = selectedCategory === 'All' ? data : data.filter(skill => skill.category === selectedCategory);
    return [{
      name: 'Proficiency',
      data: filteredData.map(skill => skill.proficiency)
    }];
  };

  useEffect(() => {
    const { secondary, divider: line } = theme.palette;
    const categoryColors = {
      All: theme.palette.grey[700], // Unique color for "All"
      Frontend: theme.palette.primary.main,
      Backend: theme.palette.secondary.main,
      Database: theme.palette.success.main,
      Cloud: theme.palette.info.main // Different color for "Cloud"
    };
    const filteredData = selectedCategory === 'All' ? data : data.filter(skill => skill.category === selectedCategory);
    setOptions((prevState) => ({
      ...prevState,
      colors: filteredData.map(skill => categoryColors[skill.category] || categoryColors.All),
      xaxis: {
        ...prevState.xaxis,
        categories: filteredData.map(skill => skill.name)
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary]
          }
        }
      },
      grid: {
        borderColor: line
      },
      theme: {
        mode: mode === 'dark' ? 'dark' : 'light'
      },
      plotOptions: {
        bar: {
          columnWidth: xsDown ? '60%' : '30%'
        }
      },
      skillData: filteredData // Update skillData in options
    }));
  }, [theme, mode, data, selectedCategory, xsDown]);

  return (
    <MainCard sx={{ mt: 1 }} content={false}>
      <Box sx={{ p: 2.5, pb: 0 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" color="secondary">
            Skills Proficiency
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup row value={selectedCategory} onChange={handleCategoryChange}>
              <FormControlLabel value="All" control={<Radio />} label="All" />
              <FormControlLabel value="Frontend" control={<Radio />} label="Frontend" />
              <FormControlLabel value="Backend" control={<Radio />} label="Backend" />
              <FormControlLabel value="Database" control={<Radio />} label="Database" />
              <FormControlLabel value="Cloud" control={<Radio />} label="Cloud" />
            </RadioGroup>
          </FormControl>
        </Stack>
        <Box id="chart" sx={{ bgcolor: 'transparent' }}>
          <ReactApexChart options={options} series={series} type="bar" height={360} />
        </Box>
      </Box>
    </MainCard>
  );
};

export default SkillsChart;
