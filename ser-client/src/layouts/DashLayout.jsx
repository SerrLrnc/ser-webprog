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
    Stack,
    Paper,
    Grid,
    Card,
    CardContent,
    Tooltip,
    useMediaQuery,
    useTheme as useMuiTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ArticleIcon from '@mui/icons-material/Article';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

// Menu items with role requirements
const allMenuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/', roles: ['admin', 'editor', 'viewer'] },
    { text: 'Articles', icon: <ArticleIcon />, path: '/articles', roles: ['admin', 'editor', 'viewer'] },
    { text: 'Reports', icon: <AssessmentIcon />, path: '/reports', roles: ['admin', 'editor'] },
    { text: 'Users', icon: <PeopleIcon />, path: '/users', roles: ['admin'] },
];

function DashLayout() {
    const [open, setOpen] = useState(true);
    const [userRole, setUserRole] = useState(null);
    const [userName, setUserName] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Get user data from localStorage
        const role = localStorage.getItem('userType');
        const name = localStorage.getItem('userName');
        
        console.log('Loaded role:', role); // Debug log
        
        if (role) {
            setUserRole(role);
            setUserName(name || 'User');
        } else {
            // Redirect to login if no role found
            navigate('/auth/signin');
        }
        
        // Check if user has access to current page
        const currentPath = location.pathname;
        const menuItem = allMenuItems.find(item => item.path === currentPath);
        
        if (menuItem && role && !menuItem.roles.includes(role)) {
            navigate('/');
        }
    }, [location.pathname, navigate]);

    // Filter menu items based on user role
    const getMenuItems = () => {
        if (!userRole) return [];
        return allMenuItems.filter(item => 
            item.roles.includes(userRole)
        );
    };

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
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
        localStorage.removeItem('userType');
        localStorage.removeItem('userName');
        localStorage.removeItem('token');
        navigate('/auth/signin');
    };

    const getRoleColor = () => {
        switch(userRole) {
            case 'admin': return '#ef4444';
            case 'editor': return '#f59e0b';
            case 'viewer': return '#10b981';
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

    const menuItems = getMenuItems();

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ zIndex: 1201, bgcolor: '#1a1a2e' }}>
                <Toolbar>
                    <IconButton color="inherit" onClick={handleDrawerToggle} edge="start" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                        Wireframe Studio
                    </Typography>
                    
                    {/* User Profile Section */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Chip
                            label={getRoleLabel()}
                            size="small"
                            sx={{ 
                                bgcolor: getRoleColor(),
                                color: 'white',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                fontSize: '10px'
                            }}
                        />
                        <Button 
                            color="inherit" 
                            onClick={handleMenuOpen}
                            sx={{ textTransform: 'none' }}
                        >
                            <Avatar sx={{ width: 32, height: 32, bgcolor: getRoleColor(), mr: 1 }}>
                                {userName?.charAt(0) || 'U'}
                            </Avatar>
                            <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
                                {userName}
                            </Typography>
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleLogout}>
                                <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            
            <Drawer
                variant="permanent"
                open={open}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        ...(!open && { width: 65 }),
                    },
                }}
            >
                <Toolbar />
                <Divider />
                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                component={Link}
                                to={item.path}
                                selected={location.pathname === item.path}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={handleLogout}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}

export default DashLayout;  