import React, { useRef, useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Stack,
    Typography,
    Paper,
    Grid,
    alpha
} from '@mui/material';
import { BarChart, LineChart, PieChart } from '@mui/x-charts';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import AssessmentIcon from '@mui/icons-material/Assessment';

function ReportsPage() {
    const printRef = useRef(null);
    const [reportType, setReportType] = useState('monthly');

    const handlePrint = () => {
        const printContent = printRef.current;
        if (!printContent) return;

        const printWindow = window.open('', '_blank', 'width=1200,height=900');
        if (!printWindow) return;

        const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
        let styleHTML = '';
        styles.forEach((style) => {
            if (style.tagName === 'STYLE') styleHTML += style.outerHTML;
            else if (style.tagName === 'LINK') styleHTML += style.outerHTML;
        });

        const exportedAt = new Intl.DateTimeFormat('en-US', {
            dateStyle: 'long',
            timeStyle: 'short',
        }).format(new Date());

        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
                <head><title>Reports Summary</title><meta charset="UTF-8" />${styleHTML}
                <style>@page{size:A4;margin:20mm}body{font-family:Arial;margin:0;padding:20px}.print-header{text-align:center;margin-bottom:30px;border-bottom:2px solid #333}.print-section{margin-bottom:30px;page-break-inside:avoid}svg{max-width:100%;height:auto}</style>
                </head>
                <body><div class="print-header"><h1>Reports Summary</h1><p>Analytics overview for generated reports</p><p>Prepared on: ${exportedAt}</p></div>${printContent.outerHTML}</body>
            </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => printWindow.print(), 500);
    };

    const monthlyData = [12, 19, 15, 22, 28, 35, 42, 48, 55, 62, 68, 75];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <Box>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2} sx={{ mb: 4 }}>
                <Box>
                    <Typography variant="h4" fontWeight="700" sx={{ letterSpacing: '-0.02em' }}>Reports & Analytics</Typography>
                    <Typography variant="body2" color="text.secondary">Comprehensive data visualization and analytics dashboard</Typography>
                </Box>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" onClick={handlePrint} startIcon={<PrintIcon />} sx={{ borderRadius: 2 }}>Print</Button>
                    <Button variant="outlined" startIcon={<DownloadIcon />} sx={{ borderRadius: 2 }}>Export</Button>
                </Stack>
            </Stack>

            <Grid container spacing={3} ref={printRef}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, borderRadius: 4 }}>
                        <Typography variant="h6" fontWeight="600" gutterBottom>Monthly Revenue Trend</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Revenue performance over the past year</Typography>
                        <Box sx={{ width: '100%', height: 400 }}>
                          <LineChart 
                              series={[{ data: monthlyData, label: 'Revenue ($K)', color: '#667eea' }]} 
                              height={380} 
                              xAxis={[{ data: months, label: 'Month', scaleType: 'point' }]} 
                          />
                      </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, borderRadius: 4, height: '100%' }}>
                        <Typography variant="h6" fontWeight="600" gutterBottom>Sales by Category</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Distribution across product categories</Typography>
                        <PieChart series={[{ data: [{ id: 0, value: 35, label: 'Product A' }, { id: 1, value: 25, label: 'Product B' }, { id: 2, value: 20, label: 'Product C' }, { id: 3, value: 20, label: 'Product D' }], innerRadius: 50, outerRadius: 100 }]} height={300} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3, borderRadius: 4 }}>
                        <Typography variant="h6" fontWeight="600" gutterBottom>Quarterly Comparison</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Year-over-year performance comparison</Typography>
                        <BarChart series={[{ data: [35, 44, 24, 34], label: '2024', color: '#e02424' }, { data: [28, 38, 20, 30], label: '2023', color: '#f093fb' }]} height={300} xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]} />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ReportsPage;