import React from 'react';
import { BarChart, PieChart, LineChart } from '@mui/x-charts';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Card, CardContent, Paper, Stack, Grid } from '@mui/material';

// Real User Data
const userData = [
  { id: 1, name: 'John Doe', age: 32, email: 'john@example.com', role: 'Admin', region: 'North' },
  { id: 2, name: 'Jane Smith', age: 28, email: 'jane@example.com', role: 'Manager', region: 'South' },
  { id: 3, name: 'Alex Johnson', age: 45, email: 'alex@example.com', role: 'User', region: 'East' },
  { id: 4, name: 'Emily Davis', age: 35, email: 'emily@example.com', role: 'User', region: 'West' },
  { id: 5, name: 'Michael Brown', age: 52, email: 'michael@example.com', role: 'Manager', region: 'North' },
  { id: 6, name: 'Sarah Lee', age: 26, email: 'sarah@example.com', role: 'User', region: 'South' },
  { id: 7, name: 'David Wilson', age: 41, email: 'david@example.com', role: 'Admin', region: 'East' },
  { id: 8, name: 'Lisa Anderson', age: 38, email: 'lisa@example.com', role: 'User', region: 'West' },
  { id: 9, name: 'Robert Taylor', age: 55, email: 'robert@example.com', role: 'User', region: 'North' },
];

// Age Group Distribution
const ageGroups = ['18-25', '26-35', '36-45', '46-55', '55+'];
const ageDistribution = [
  userData.filter(u => u.age >= 18 && u.age <= 25).length,
  userData.filter(u => u.age >= 26 && u.age <= 35).length,
  userData.filter(u => u.age >= 36 && u.age <= 45).length,
  userData.filter(u => u.age >= 46 && u.age <= 55).length,
  userData.filter(u => u.age > 55).length,
];

// Region Distribution
const regions = ['North', 'South', 'East', 'West'];
const regionData = regions.map(region => userData.filter(u => u.region === region).length);

// Role Distribution
const roles = ['Admin', 'Manager', 'User'];
const roleData = roles.map(role => userData.filter(u => u.role === role).length);

// Table Columns
const tableColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'User Name', width: 180 },
  { field: 'email', headerName: 'Email', width: 220 },
  { field: 'age', headerName: 'Age', width: 100, type: 'number' },
  { field: 'role', headerName: 'Role', width: 120 },
  { field: 'region', headerName: 'Region', width: 120 },
];

const totalUsers = userData.length;
const averageAge = (userData.reduce((sum, u) => sum + u.age, 0) / totalUsers).toFixed(1);

function DashboardPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Dashboard Overview
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Welcome back! Here's what's happening with your users today.
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#667eea', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h3" fontWeight="bold">{totalUsers}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#764ba2', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">Average Age</Typography>
              <Typography variant="h3" fontWeight="bold">{averageAge}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#f093fb', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">Active Users</Typography>
              <Typography variant="h3" fontWeight="bold">{totalUsers}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#4facfe', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">Regions</Typography>
              <Typography variant="h3" fontWeight="bold">4</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts Section - BIGGER */}
      <Typography variant="h5" gutterBottom sx={{ mt: 2, mb: 2 }}>
        Analytics
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Age Distribution Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%', minHeight: 400 }}>
            <Typography variant="h6" gutterBottom>Age Distribution</Typography>
            <Box sx={{ width: '100%', height: 320 }}>
              <BarChart
                series={[{ data: ageDistribution, label: 'Users', color: '#667eea' }]}
                height={320}
                width={500}
                xAxis={[{ data: ageGroups, scaleType: 'band', label: 'Age Groups' }]}
                yAxis={[{ label: 'Number of Users' }]}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Region Distribution Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%', minHeight: 400 }}>
            <Typography variant="h6" gutterBottom>Users by Region</Typography>
            <Box sx={{ width: '100%', height: 320, display: 'flex', justifyContent: 'center' }}>
              <PieChart
                series={[{
                  data: regions.map((region, i) => ({ id: i, value: regionData[i], label: region })),
                  innerRadius: 40,
                  outerRadius: 120,
                }]}
                height={320}
                width={500}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Role Distribution Bar Chart - BIGGER */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>User Roles Distribution</Typography>
            <Box sx={{ width: '100%', height: 350 }}>
              <BarChart
                series={[{ data: roleData, label: 'Users', color: '#764ba2' }]}
                height={350}
                width={800}
                xAxis={[{ data: roles, scaleType: 'band', label: 'Roles' }]}
                yAxis={[{ label: 'Number of Users' }]}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Monthly Trend Line Chart - BIGGER */}
      <Typography variant="h5" gutterBottom sx={{ mt: 2, mb: 2 }}>
        Monthly Trend
      </Typography>
      
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>User Growth (Last 6 Months)</Typography>
        <Box sx={{ width: '100%', height: 350 }}>
          <LineChart
            series={[{ data: [15, 22, 28, 35, 42, 48], label: 'New Users', color: '#f093fb' }]}
            height={350}
            width={800}
            xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], label: 'Month' }]}
            yAxis={[{ label: 'Number of Users' }]}
          />
        </Box>
      </Paper>

      {/* Users Table */}
      <Typography variant="h5" gutterBottom sx={{ mt: 2, mb: 2 }}>
        Users List
      </Typography>
      
      <Paper sx={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={userData}
          columns={tableColumns}
          initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Paper>
    </Box>
  );
}

export default DashboardPage;