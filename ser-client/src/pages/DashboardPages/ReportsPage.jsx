import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { BarChart, LineChart, PieChart } from '@mui/x-charts';

// Sample data for reports
const monthlyData = [12, 19, 15, 22, 28, 35, 42, 48, 55, 62, 68, 75];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const categoryData = [
  { id: 0, value: 35, label: 'Product A' },
  { id: 1, value: 25, label: 'Product B' },
  { id: 2, value: 20, label: 'Product C' },
  { id: 3, value: 20, label: 'Product D' },
];

function ReportsPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Reports & Analytics
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Comprehensive data visualization and analytics dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Monthly Revenue Chart - BIGGER */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Monthly Revenue Trend</Typography>
            <Box sx={{ width: '100%', height: 400 }}>
              <LineChart
                series={[{ data: monthlyData, label: 'Revenue ($K)', color: '#667eea' }]}
                height={380}
                width={700}
                xAxis={[{ data: months, label: 'Month', scaleType: 'point' }]}
                yAxis={[{ label: 'Revenue (Thousands USD)' }]}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Category Distribution Pie - BIGGER */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%', minHeight: 450 }}>
            <Typography variant="h6" gutterBottom>Sales by Category</Typography>
            <Box sx={{ width: '100%', height: 350, display: 'flex', justifyContent: 'center' }}>
              <PieChart
                series={[{ data: categoryData, innerRadius: 50, outerRadius: 130 }]}
                height={350}
                width={450}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Quarterly Comparison - BIGGER */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Quarterly Comparison</Typography>
            <Box sx={{ width: '100%', height: 380 }}>
              <BarChart
                series={[
                  { data: [35, 44, 24, 34], label: '2024', color: '#764ba2' },
                  { data: [28, 38, 20, 30], label: '2023', color: '#f093fb' },
                ]}
                height={360}
                width={900}
                xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band', label: 'Quarters' }]}
                yAxis={[{ label: 'Revenue ($K)' }]}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ReportsPage;