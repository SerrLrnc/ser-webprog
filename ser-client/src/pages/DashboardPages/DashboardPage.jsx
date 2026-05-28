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
    Button
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import constants from '../../constants';

function DashboardPage() {
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalArticles: 0,
        totalReports: 0,
        activeUsers: 0
    });
    const [recentUsers, setRecentUsers] = useState([]);
    const [userRole, setUserRole] = useState('');

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
        } catch (error) {
            console.error('Error fetching stats:', error);
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

    // Admin Dashboard - Full access with all stats
    if (userRole === 'admin') {
        return (
            <Box>
                <Typography variant="h4" gutterBottom fontWeight="bold">
                    Admin Dashboard
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    Welcome back, Administrator! Here's your system overview.
                </Typography>

                <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ bgcolor: '#667eea', color: 'white' }}>
                            <CardContent>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Box>
                                        <Typography variant="h6">Total Users</Typography>
                                        <Typography variant="h3" fontWeight="bold">{stats.totalUsers}</Typography>
                                    </Box>
                                    <PeopleIcon sx={{ fontSize: 48, opacity: 0.7 }} />
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ bgcolor: '#764ba2', color: 'white' }}>
                            <CardContent>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Box>
                                        <Typography variant="h6">Total Articles</Typography>
                                        <Typography variant="h3" fontWeight="bold">{stats.totalArticles}</Typography>
                                    </Box>
                                    <ArticleIcon sx={{ fontSize: 48, opacity: 0.7 }} />
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ bgcolor: '#f093fb', color: 'white' }}>
                            <CardContent>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Box>
                                        <Typography variant="h6">Reports</Typography>
                                        <Typography variant="h3" fontWeight="bold">{stats.totalReports}</Typography>
                                    </Box>
                                    <AssessmentIcon sx={{ fontSize: 48, opacity: 0.7 }} />
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ bgcolor: '#4facfe', color: 'white' }}>
                            <CardContent>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Box>
                                        <Typography variant="h6">Active Users</Typography>
                                        <Typography variant="h3" fontWeight="bold">{stats.activeUsers}</Typography>
                                    </Box>
                                    <TrendingUpIcon sx={{ fontSize: 48, opacity: 0.7 }} />
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Typography variant="h5" gutterBottom>Recent Users</Typography>
                <Paper sx={{ p: 2 }}>
                    {recentUsers.map((user) => (
                        <Box key={user._id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1, borderBottom: '1px solid #e5e7eb' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar sx={{ bgcolor: '#667eea' }}>{user.firstName?.charAt(0)}</Avatar>
                                <Box>
                                    <Typography variant="body1" fontWeight="medium">{user.firstName} {user.lastName}</Typography>
                                    <Typography variant="caption" color="text.secondary">{user.email}</Typography>
                                </Box>
                            </Box>
                            <Chip label={user.type} size="small" color={user.type === 'admin' ? 'error' : user.type === 'editor' ? 'warning' : 'success'} />
                        </Box>
                    ))}
                </Paper>
            </Box>
        );
    }

    // Editor Dashboard - Moderate access
    if (userRole === 'editor') {
        return (
            <Box>
                <Typography variant="h4" gutterBottom fontWeight="bold">
                    Editor Dashboard
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    Welcome back! Manage your content and track performance.
                </Typography>

                <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ bgcolor: '#667eea', color: 'white' }}>
                            <CardContent>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Box>
                                        <Typography variant="h6">Your Articles</Typography>
                                        <Typography variant="h3" fontWeight="bold">{stats.totalArticles}</Typography>
                                    </Box>
                                    <ArticleIcon sx={{ fontSize: 48, opacity: 0.7 }} />
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ bgcolor: '#f093fb', color: 'white' }}>
                            <CardContent>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Box>
                                        <Typography variant="h6">Pending Reviews</Typography>
                                        <Typography variant="h3" fontWeight="bold">3</Typography>
                                    </Box>
                                    <AssessmentIcon sx={{ fontSize: 48, opacity: 0.7 }} />
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ bgcolor: '#4facfe', color: 'white' }}>
                            <CardContent>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Box>
                                        <Typography variant="h6">Published</Typography>
                                        <Typography variant="h3" fontWeight="bold">12</Typography>
                                    </Box>
                                    <TrendingUpIcon sx={{ fontSize: 48, opacity: 0.7 }} />
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Paper sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h6">Quick Actions</Typography>
                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                        <Button variant="contained" onClick={() => window.location.href = '/articles'}>Create New Article</Button>
                        <Button variant="outlined">Review Pending</Button>
                    </Stack>
                </Paper>
            </Box>
        );
    }

    // Viewer Dashboard - Limited access
    return (
        <Box>
            <Typography variant="h4" gutterBottom fontWeight="bold">
                Viewer Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Welcome! Browse and read articles.
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6}>
                    <Card sx={{ bgcolor: '#667eea', color: 'white' }}>
                        <CardContent>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Box>
                                    <Typography variant="h6">Available Articles</Typography>
                                    <Typography variant="h3" fontWeight="bold">{stats.totalArticles}</Typography>
                                </Box>
                                <ArticleIcon sx={{ fontSize: 48, opacity: 0.7 }} />
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card sx={{ bgcolor: '#4facfe', color: 'white' }}>
                        <CardContent>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Box>
                                    <Typography variant="h6">Categories</Typography>
                                    <Typography variant="h3" fontWeight="bold">5</Typography>
                                </Box>
                                <TrendingUpIcon sx={{ fontSize: 48, opacity: 0.7 }} />
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Paper sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6">Start Reading</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Click on Articles in the sidebar to browse our collection.
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }} onClick={() => window.location.href = '/articles'}>
                    Browse Articles
                </Button>
            </Paper>
        </Box>
    );
}

export default DashboardPage;