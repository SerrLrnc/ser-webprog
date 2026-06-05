import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Stack,
    Paper,
    Avatar,
    Chip,
    LinearProgress,
    alpha,
    useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { BarChart, PieChart, LineChart } from '@mui/x-charts';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import constants from '../../constants';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: 16,
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
    },
}));

function DashboardPage() {
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalArticles: 0,
        totalReports: 0,
        activeUsers: 0
    });
    const [recentUsers, setRecentUsers] = useState([]);
    const [userRole, setUserRole] = useState('');
    const [loading, setLoading] = useState(true);
    const theme = useTheme();

    useEffect(() => {
        const role = localStorage.getItem('userType');
        setUserRole(role);
        fetchStats();
        fetchRecentUsers();
    }, []);

    const fetchStats = async () => {
        try {
            const usersRes = await fetch(`${constants.HOST}/users`);
            const users = await usersRes.json();
            
            const articlesRes = await fetch(`${constants.HOST}/articles`);
            const articles = await articlesRes.json();
            
            setStats({
                totalUsers: users.length,
                totalArticles: articles.length,
                totalReports: Math.floor(Math.random() * 50) + 20,
                activeUsers: users.filter(u => u.isActive).length
            });
            setLoading(false);
        } catch (error) {
            console.error('Error fetching stats:', error);
            setLoading(false);
        }
    };

    const fetchRecentUsers = async () => {
        try {
            const res = await fetch(`${constants.HOST}/users`);
            const users = await res.json();
            setRecentUsers(users.slice(-5).reverse());
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const ageDistribution = [8, 12, 10, 6, 4];
    const ageGroups = ['18-25', '26-35', '36-45', '46-55', '55+'];
    
    const regionData = [
        { id: 0, value: 35, label: 'North', color: '#667eea' },
        { id: 1, value: 25, label: 'South', color: '#764ba2' },
        { id: 2, value: 20, label: 'East', color: '#f093fb' },
        { id: 3, value: 20, label: 'West', color: '#4facfe' },
    ];
    
    const monthlyData = [15, 22, 28, 35, 42, 48];

    if (loading) {
        return (
            <Box sx={{ width: '100%', mt: 4 }}>
                <LinearProgress sx={{ bgcolor: alpha('#e02424', 0.2), '& .MuiLinearProgress-bar': { bgcolor: '#e02424' } }} />
            </Box>
        );
    }

    return (
        <Box>
            <Typography variant="h4" gutterBottom fontWeight="700" sx={{ letterSpacing: '-0.02em', mb: 1 }}>
                Dashboard Overview
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Welcome back, {userRole === 'admin' ? 'Administrator' : userRole === 'editor' ? 'Editor' : 'Viewer'}! Here's what's happening today.
            </Typography>

            {/* Summary Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <StyledCard sx={{ bgcolor: '#667eea', color: 'white' }}>
                        <CardContent>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Box>
                                    <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>TOTAL USERS</Typography>
                                    <Typography variant="h3" fontWeight="bold">{stats.totalUsers}</Typography>
                                </Box>
                                <PeopleIcon sx={{ fontSize: 48, opacity: 0.3 }} />
                            </Stack>
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StyledCard sx={{ bgcolor: '#764ba2', color: 'white' }}>
                        <CardContent>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Box>
                                    <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>TOTAL ARTICLES</Typography>
                                    <Typography variant="h3" fontWeight="bold">{stats.totalArticles}</Typography>
                                </Box>
                                <ArticleIcon sx={{ fontSize: 48, opacity: 0.3 }} />
                            </Stack>
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StyledCard sx={{ bgcolor: '#f093fb', color: 'white' }}>
                        <CardContent>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Box>
                                    <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>REPORTS</Typography>
                                    <Typography variant="h3" fontWeight="bold">{stats.totalReports}</Typography>
                                </Box>
                                <AssessmentIcon sx={{ fontSize: 48, opacity: 0.3 }} />
                            </Stack>
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StyledCard sx={{ bgcolor: '#4facfe', color: 'white' }}>
                        <CardContent>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Box>
                                    <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>ACTIVE USERS</Typography>
                                    <Typography variant="h3" fontWeight="bold">{stats.activeUsers}</Typography>
                                </Box>
                                <TrendingUpIcon sx={{ fontSize: 48, opacity: 0.3 }} />
                            </Stack>
                        </CardContent>
                    </StyledCard>
                </Grid>
            </Grid>

            {/* Charts Section - Full width */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, borderRadius: 4 }}>
                        <Typography variant="h6" fontWeight="600" gutterBottom>Age Distribution</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>User age groups breakdown</Typography>
                        <Box sx={{ width: '100%', height: 400 }}>
                            <Box sx={{ width: '100%', height: 400 }}>
                                    <BarChart
                                        series={[{ data: ageDistribution, label: 'Users', color: '#667eea' }]}
                                        height={350}
                                        xAxis={[{ data: ageGroups, scaleType: 'band' }]}
                                    />
                                </Box>
                            </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, borderRadius: 4 }}>
                        <Typography variant="h6" fontWeight="600" gutterBottom>Users by Region</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Geographic distribution</Typography>
                        <Box sx={{ width: '100%', height: 400, display: 'flex', justifyContent: 'center' }}>
                            <PieChart 
                                series={[{ data: regionData, innerRadius: 40, outerRadius: 120 }]} 
                                height={350} 
                                width={500}
                            />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            {/* Monthly Trend - Full width */}
            <Paper sx={{ p: 3, borderRadius: 4, mb: 4 }}>
                <Typography variant="h6" fontWeight="600" gutterBottom>Monthly User Growth</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>New user registrations over time</Typography>
                <Box sx={{ width: '100%', height: 400 }}>
                    <LineChart
                        series={[{ data: monthlyData, label: 'New Users', color: '#e02424' }]}
                        height={350}
                        width={900}
                        xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], label: 'Month' }]}
                    />
                </Box>
            </Paper>

            {/* Google Maps Live Location */}
            <Paper sx={{ p: 3, borderRadius: 4, mb: 4 }}>
                <Typography variant="h6" fontWeight="600" gutterBottom>Live Location Map</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Real-time user location tracking</Typography>
                <Box sx={{ height: 450, width: '100%', borderRadius: 2, overflow: 'hidden' }}>
                    <MapContainer 
                        center={[14.604253, 120.994314]} 
                        zoom={14} 
                        style={{ height: '100%', width: '100%' }}
                    >
                        <TileLayer 
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[14.604253, 120.994314]}>
                            <Popup>
                                <strong>National University - Manila</strong>
                                <br />
                                551 F Jhocson St, Sampaloc
                                <br />
                                Manila, 1008 Metro Manila
                            </Popup>
                        </Marker>
                    </MapContainer>
                </Box>
            </Paper>

            {/* Recent Users */}
            {userRole === 'admin' && (
                <>
                    <Typography variant="h5" fontWeight="600" gutterBottom sx={{ mt: 2, mb: 2 }}>
                        Recent Users
                    </Typography>
                    <Paper sx={{ p: 2, borderRadius: 4 }}>
                        <Stack spacing={2}>
                            {recentUsers.map((user) => (
                                <Box key={user._id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1, borderBottom: '1px solid #e5e7eb' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Avatar sx={{ bgcolor: alpha('#e02424', 0.9), width: 40, height: 40 }}>
                                            {user.firstName?.charAt(0)}
                                        </Avatar>
                                        <Box>
                                            <Typography variant="body1" fontWeight="500">{user.firstName} {user.lastName}</Typography>
                                            <Typography variant="caption" color="text.secondary">{user.email}</Typography>
                                        </Box>
                                    </Box>
                                    <Chip 
                                        label={user.type?.toUpperCase()} 
                                        size="small" 
                                        sx={{ 
                                            bgcolor: alpha('#e02424', 0.1), 
                                            color: '#e02424',
                                            fontWeight: 500,
                                            fontSize: '10px'
                                        }} 
                                    />
                                </Box>
                            ))}
                        </Stack>
                    </Paper>
                </>
            )}
        </Box>
    );
}

export default DashboardPage;