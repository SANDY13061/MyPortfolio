import PropTypes from 'prop-types';
import { Fragment, useEffect, useMemo, useState } from 'react';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import { Chip, Paper, Skeleton, Table, TableBody, TableContainer, TableCell, TableHead, TableRow, LinearProgress, Typography } from '@mui/material';

// third-party
import { flexRender, useReactTable, getExpandedRowModel, getCoreRowModel } from '@tanstack/react-table';

// project import
import ScrollX from 'components/ScrollX';
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import { CSVExport } from 'components/third-party/react-table';

// assets
import { DownOutlined, RightOutlined, StopOutlined } from '@ant-design/icons';
import CustomerCard from 'sections/apps/customer/CustomerCard';

// Educational data
const educationData = [
  {
    degree: 'B.E (ECE)',
    institute: 'Thanthai Periyar Govt Institute Of Technology, Vellore',
    board: 'ANNA UNIVERSITY',
    cgpa: 77.6 , // Assuming CGPA on a scale of 10
    year: '2019-2023',
    additionalInfo: 'Team leader for multiple final-year projects, including a real-time river water quality monitoring system using IoT (IBM) and a smart alert medibox. Spearheaded the development of a full-stack user authentication system using Angular, connected to PostgreSQL. Completed an NPTEL course on C programming. Actively involved in the placement cell, demonstrating leadership and project management skills.'  },
  {
    degree: 'HSC (12th)',
    institute: 'Sri Ayyan Vidhiyasriram Matric Hrs. School, R.K Pet',
    board: 'STATE BOARD',
    cgpa: 80.1,
    year: '2017-2019',
    additionalInfo: 'Specialized in Computer Science, achieving a centum in the subject. Actively participated in science exhibitions and won the first prize in the state-level science quiz.'
  },
  {
    degree: 'SSLC (10th)',
    institute: 'Sri Divya Chaithaniya Matric Hrs. School, Sholinghure ',
    board: 'STATE BOARD',
    cgpa: 85.5,
    year: '2016-2017',
    additionalInfo: 'Consistent academic performer with excellence in Mathematics and Science. Represented school in various inter-school competitions.'
  }
];

// Columns definition
const columns = [
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
    header: 'Degree',
    accessorKey: 'degree'
  },
  {
    header: 'Institute',
    accessorKey: 'institute'
  },
  {
    header: 'Board/University',
    accessorKey: 'board'
  },
  {
    header: 'CGPA/Percentage',
    accessorKey: 'cgpa',
    cell: ({ getValue }) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        
        <LinearProgress variant="determinate" value={getValue()} style={{ width: '100%' }} />
        <Typography variant="body2" style={{ marginRight: 8 }}>{getValue()}%</Typography>
      </div>
    )
  },
  {
    header: 'Year',
    accessorKey: 'year'
  }
];

// ==============================|| REACT TABLE ||============================== //

function TableSubRows({ columns, data, loading }) {
  const theme = useTheme();

  const table = useReactTable({
    data,
    columns,
    getRowCanExpand: () => true,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel()
  });

  if (loading) {
    return (
      <>
        {[0, 1, 2].map((item) => (
          <TableRow key={item}>
            <TableCell />
            {[0, 1, 2, 3, 4].map((col) => (
              <TableCell key={col}>
                <Skeleton animation="wave" />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </>
    );
  }

  return (
    <>
      {table.getRowModel().rows.map((row) => (
        <Fragment key={row.id}>
          <TableRow sx={{ bgcolor: alpha(theme.palette.primary.lighter, 0.35) }}>
            <TableCell />
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} {...cell.column.columnDef.meta}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
          {row.getIsExpanded() && (
            <TableRow>
              <TableCell colSpan={columns.length + 1}>
                <Typography variant="body2">{row.original.additionalInfo}</Typography>
              </TableCell>
            </TableRow>
          )}
        </Fragment>
      ))}
    </>
  );
}

TableSubRows.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  loading: PropTypes.bool
};

function ReactTable({ columns, data }) {
  const table = useReactTable({
    data,
    columns,
    getRowCanExpand: () => true,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel()
  });

  let headers = [];
  table.getAllColumns().map(
    (columns) =>
      // @ts-ignore
      columns.columnDef.accessorKey &&
      headers.push({
        label: typeof columns.columnDef.header === 'string' ? columns.columnDef.header : '#',
        // @ts-ignore
        key: columns.columnDef.accessorKey
      })
  );

  return (
    <MainCard title="Education details" content={false} secondary={<CSVExport {...{ data, headers, filename: 'expanding.csv' }} />}>
      <ScrollX>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} sx={{ '& > th:first-of-type': { width: 58 } }}>
                  {headerGroup.headers.map((header) => (
                    <TableCell key={header.id} {...header.column.columnDef.meta}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <Fragment key={row.id}>
                  <TableRow>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} {...cell.column.columnDef.meta}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                  {row.getIsExpanded() && (
                    <TableRow>
                      <TableCell colSpan={columns.length + 1}>
                        <Typography variant="body2">{row.original.additionalInfo}</Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ScrollX>

    </MainCard>
  );
}

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array
};

// ==============================|| REACT TABLE - EXPANDING TABLE ||============================== //

const ExpandingTable = () => {
  const data = educationData;

  return <ReactTable {...{ columns, data }} />;
};

ExpandingTable.propTypes = {
  data: PropTypes.any
};

export default ExpandingTable;
