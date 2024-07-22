import PropTypes from 'prop-types';
import { Fragment, useMemo } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import { Chip, LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton } from '@mui/material';
import { flexRender, useReactTable, getExpandedRowModel, getCoreRowModel } from '@tanstack/react-table';
import { DownOutlined, RightOutlined, StopOutlined } from '@ant-design/icons';

// Columns for skill table
const skillColumns = [
  {
    header: 'Name',
    accessorKey: 'name'
  },
  {
    header: 'Description',
    accessorKey: 'description'

  },
  {
    header: 'Proficiency',
    accessorKey: 'proficiency',
    cell: ({ getValue }) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
      
      <LinearProgress variant="determinate" value={getValue()} style={{ width: '100%' }} />
      <Typography variant="body2" style={{ marginRight: 8 }}>{getValue()}%</Typography>
      </div>
    )
  }
];

const categoryColumns = [
  {
    id: 'expander',
    header: () => null,
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <IconButton color={row.getIsExpanded() ? 'primary' : 'secondary'} onClick={row.getToggleExpandedHandler()} size="small">
          {row.getIsExpanded() ? <DownOutlined /> : <RightOutlined />}
        </IconButton>
      ) : (
        <StopOutlined style={{ color: '#ccc' }} />
      );
    }
  },
  {
    header: 'Category',
    accessorKey: 'category'
  },
  {
    header: 'Description',
    accessorKey: 'description'
  }
];

// Expandable Table Component
const ExpandableTable = ({ data }) => {
  const theme = useTheme();

  const table = useReactTable({
    data,
    columns: categoryColumns,
    getRowCanExpand: () => true,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel()
  });

  const backColor = alpha(theme.palette.primary.lighter, 0.1);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableCell key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <Fragment key={row.id}>
              <TableRow>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id} {...cell.column.columnDef.meta}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
              {row.getIsExpanded() && (
                <TableRow sx={{ bgcolor: backColor }}>
                  <TableCell colSpan={row.getVisibleCells().length}>
                    <SkillTable data={row.original.skills} />
                  </TableCell>
                </TableRow>
              )}
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Skill Table Component
const SkillTable = ({ data }) => {
  const table = useReactTable({
    data,
    columns: skillColumns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableCell key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id} {...cell.column.columnDef.meta}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

SkillTable.propTypes = {
  data: PropTypes.array
};

// Main Component
const SkillsTables = ({ skillData }) => {
  const categories = [...new Set(skillData.map(skill => skill.category))];

  const categoryData = categories.map(category => {
    const skills = skillData.filter(skill => skill.category === category);
    return {
      category,
      description: `Skills related to ${category}`,
      skills
    };
  });

  return <ExpandableTable data={categoryData} />;
};

export default SkillsTables;
