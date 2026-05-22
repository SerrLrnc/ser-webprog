import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'role', headerName: 'Role', width: 130 },
];

const rows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager' },
  { id: 3, name: 'Alex Johnson', email: 'alex@example.com', role: 'User' },
];

function UsersPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">Users</Typography>
      <Paper sx={{ height: 400, width: '100%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} pageSizeOptions={[5]} />
      </Paper>
    </Box>
  );
}

export default UsersPage;