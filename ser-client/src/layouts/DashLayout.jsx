import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
    Box,
    Drawer,
    AppBar,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Button,
    Avatar,
    Menu,
    MenuItem,
    Chip,
    useTheme,
    alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ArticleIcon from '@mui/icons-material/Article';
import LogoutIcon from '@mui/icons-material/Logout';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

const drawerWidth = 280;

const menuItems = [
    { text: 'Dashboard', icon: <SpaceDashboardIcon />, path: '/dashboard' },
    { text: 'Articles', icon: <ArticleIcon />, path: '/dashboard/articles' },
    { text: 'Reports', icon: <AssessmentIcon />, path: '/dashboard/reports' },
    { text: 'Users', icon: <PeopleIcon />, path: '/dashboard/users' },
];

// Styled AppBar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#1a1a2e',
    backgroundImage: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
}));

// Styled Drawer
const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        backgroundColor: '#1a1a2e',
        backgroundImage: 'linear-gradient(180deg, #1a1a2e 0%, #0f3460 100%)',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        ...(!open && {
            width: theme.spacing(8),
            overflowX: 'hidden',
        }),
    },
}));

function DashLayout() {
    const [open, setOpen] = useState(true);
    const [userRole, setUserRole] = useState(null);
    const [userName, setUserName] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        const role = localStorage.getItem('userType');
        const name = localStorage.getItem('userName');
        
        if (role) {
            setUserRole(role);
            setUserName(name || 'User');
        } else {
            window.location.href = '/auth/signin';
        }
    }, []);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/auth/signin';
    };

    const getRoleColor = () => {
        switch(userRole) {
            case 'admin': return '#9b1c1c';
            case 'editor': return '#c81e1e';
            case 'viewer': return '#e02424';
            default: return '#6b7280';
        }
    };

    const getRoleLabel = () => {
        switch(userRole) {
            case 'admin': return 'Administrator';
            case 'editor': return 'Editor';
            case 'viewer': return 'Viewer';
            default: return userRole || 'Loading...';
        }
    };

    const getFilteredMenuItems = () => {
        if (userRole === 'admin') return menuItems;
        if (userRole === 'editor') return menuItems.filter(item => item.text !== 'Users');
        return menuItems.filter(item => item.text === 'Dashboard' || item.text === 'Articles');
    };

    const filteredMenuItems = getFilteredMenuItems();

    return (
        <Box sx={{ display: 'flex', bgcolor: '#f5f7fa', minHeight: '100vh' }}>
            <StyledAppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={handleDrawerToggle}
                        edge="start"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1, fontWeight: 600, letterSpacing: '-0.5px' }}>
                        Yoyetz Dashboard
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Chip
                            label={getRoleLabel()}
                            size="small"
                            sx={{ 
                                bgcolor: alpha(getRoleColor(), 0.9), 
                                color: 'white', 
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                fontSize: '11px',
                                letterSpacing: '0.5px'
                            }}
                        />
                        <Button color="inherit" onClick={handleMenuOpen} sx={{ textTransform: 'none' }}>
                            <Avatar sx={{ width: 32, height: 32, bgcolor: getRoleColor(), mr: 1 }}>
                                {userName?.charAt(0) || 'U'}
                            </Avatar>
                            <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 500 }}>
                                {userName}
                            </Typography>
                        </Button>
                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                            <MenuItem onClick={handleLogout}>
                                <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </StyledAppBar>
            
            <StyledDrawer variant="permanent" open={open}>
                <Toolbar />
                <Box sx={{ mt: 2 }}>
                    <List>
                        {filteredMenuItems.map((item) => (
                            <ListItem key={item.text} disablePadding sx={{ display: 'block', mb: 0.5 }}>
                                <ListItemButton
                                    component={Link}
                                    to={item.path}
                                    selected={location.pathname === item.path}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                        mx: 1,
                                        borderRadius: 2,
                                        '&.Mui-selected': {
                                            backgroundColor: alpha('#e02424', 0.15),
                                            '&:hover': {
                                                backgroundColor: alpha('#e02424', 0.25),
                                            },
                                            '& .MuiListItemIcon-root': {
                                                color: '#e02424',
                                            },
                                            '& .MuiListItemText-primary': {
                                                color: 'white',
                                                fontWeight: 600,
                                            },
                                        },
                                        '&:hover': {
                                            backgroundColor: alpha('#ffffff', 0.08),
                                        },
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                            color: location.pathname === item.path ? '#e02424' : '#a0aec0',
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary={item.text} 
                                        sx={{ 
                                            opacity: open ? 1 : 0,
                                            '& .MuiListItemText-primary': {
                                                fontWeight: 500,
                                                fontSize: '14px',
                                                letterSpacing: '-0.3px',
                                                 color: '#e2e8f0',
                                            }
                                        }} 
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider sx={{ bgcolor: 'rgba(255,255,255,0.08)', my: 2 }} />
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={handleLogout}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                mx: 1,
                                borderRadius: 2,
                                '&:hover': {
                                    backgroundColor: alpha('#e02424', 0.15),
                                },
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: '#a0aec0',
                                }}
                            >
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </StyledDrawer>
            
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                <Outlet />
            </Box>
        </Box>
    );
}

export default DashLayout;