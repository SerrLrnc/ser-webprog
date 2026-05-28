import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
  Paper,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { PieChart } from '@mui/x-charts/PieChart';
import { DataGrid } from '@mui/x-data-grid';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import FilterListIcon from '@mui/icons-material/FilterList';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
  {
    field: 'fullName',
    headerName: 'Full name',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const ReportsPage = () => {
  const printRef = useRef(null);
  const [filter, setFilter] = useState('');
  const [reportType, setReportType] = useState('monthly');

  const handlePrint = () => {
    const printContent = printRef.current;

    console.log('printContent:', printContent);
    
    if (!printContent) {
      alert('Nothing to print');
      return;
    }

    // Clone the content to avoid modifying the original
    const contentToPrint = printContent.cloneNode(true);
    
    // Get all styles from the document
    const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
    let styleHTML = '';
    styles.forEach((style) => {
      if (style.tagName === 'STYLE') {
        styleHTML += style.outerHTML;
      } else if (style.tagName === 'LINK') {
        styleHTML += style.outerHTML;
      }
    });

    const exportedAt = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date());

    const printWindow = window.open('', '_blank', 'width=1200,height=900');
    
    if (!printWindow) {
      alert('Please allow pop-ups to print');
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Reports Summary</title>
          <meta charset="UTF-8" />
          ${styleHTML}
          <style>
            @page {
              size: A4;
              margin: 20mm;
            }
            body {
              font-family: Arial, Helvetica, sans-serif;
              margin: 0;
              padding: 20px;
              background: white;
            }
            .print-header {
              text-align: center;
              margin-bottom: 30px;
              padding-bottom: 15px;
              border-bottom: 2px solid #333;
            }
            .print-header h1 {
              margin: 0;
              color: #333;
            }
            .print-header p {
              margin: 5px 0;
              color: #666;
            }
            .print-section {
              margin-bottom: 30px;
              page-break-inside: avoid;
            }
            .print-section h3 {
              margin-bottom: 10px;
              color: #555;
            }
            .chart-container {
              margin: 20px 0;
              text-align: center;
            }
            svg {
              max-width: 100%;
              height: auto;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 15px 0;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f5f5f5;
            }
            .print-hide {
              display: none;
            }
          </style>
        </head>
        <body>
          <div class="print-header">
            <h1>Reports Summary</h1>
            <p>Analytics continue to generate reports, undergo breakdown, and completion performance.</p>
            <p>Prepared on: ${exportedAt}</p>
          </div>
          ${contentToPrint.outerHTML}
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    
    // Wait for images and fonts to load then print
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  const handleDownloadPDF = () => {
    alert('PDF export feature - In production, this would generate a downloadable PDF file');
  };

  return (
    <Box>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography variant="h4" gutterBottom>
            Reports
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Analytics continue to generate reports, undergo breakdown, and completion performance.
          </Typography>
        </Box>

        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          <Button variant="contained" onClick={handlePrint} startIcon={<PrintIcon />}>
            Print Report
          </Button>
          <Button variant="outlined" onClick={handleDownloadPDF} startIcon={<DownloadIcon />}>
            Export PDF
          </Button>
        </Stack>
      </Stack>

      {/* Filter Bar - Hidden when printing */}
      <Paper sx={{ p: 2, mb: 3 }} className="print-hide">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Report Type</InputLabel>
            <Select value={reportType} onChange={(e) => setReportType(e.target.value)} label="Report Type">
              <MenuItem value="monthly">Monthly Report</MenuItem>
              <MenuItem value="quarterly">Quarterly Report</MenuItem>
              <MenuItem value="yearly">Yearly Report</MenuItem>
            </Select>
          </FormControl>
          <TextField
            size="small"
            placeholder="Search reports..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            sx={{ flex: 1 }}
          />
          <Button variant="outlined" startIcon={<FilterListIcon />}>
            Filter
          </Button>
        </Stack>
      </Paper>

      {/* Content to Print */}
      <div ref={printRef}>
        {/* Monthly Report Output Card */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Monthly Report Output
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              This chart compares how many reports were generated and how
              many were completed across the last four months.
            </Typography>
            <Box sx={{ height: 350, width: '100%' }}>
              <BarChart
                series={[
                  { data: [35, 44, 24, 34], label: 'Generated', color: '#667eea' },
                  { data: [28, 38, 20, 30], label: 'Completed', color: '#4facfe' },
                ]}
                height={320}
                xAxis={[{ data: ['January', 'February', 'March', 'April'], scaleType: 'band' }]}
              />
            </Box>
          </CardContent>
        </Card>

        {/* Report Category Share and Completion Rate */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Report Category Share
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  This chart shows the distribution of report requests by category.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: 300 }}>
                  <PieChart
                    series={[
                      {
                        data: [
                          { id: 0, value: 14, label: 'Sales' },
                          { id: 1, value: 10, label: 'Users' },
                          { id: 2, value: 8, label: 'Inventory' },
                          { id: 3, value: 6, label: 'Finance' },
                        ],
                        innerRadius: 40,
                        outerRadius: 100,
                      },
                    ]}
                    width={450}
                    height={280}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Completion Rate
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Current percentage of reports completed on time.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 300 }}>
                  <Gauge width={180} height={180} value={78} valueMin={0} valueMax={100} />
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    78% Completion Rate
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Data Grid Table */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Report Data Details</Typography>
            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
              />
            </Box>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
};

export default ReportsPage;