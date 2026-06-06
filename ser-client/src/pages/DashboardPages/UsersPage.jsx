import React, { useState, useEffect, useMemo } from 'react';
import {
    Box,
    Typography,
    Paper,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Stack,
    TextField,
    Chip,
    IconButton,
    Alert,
    Avatar,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    InputAdornment,
    IconButton as MuiIconButton,
    Grid,
    Card,
    CardContent,
    alpha,
    useTheme
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import constants from '../../constants';

const roles = ['admin', 'editor', 'viewer'];
const genders = ['male', 'female'];

const blankForm = {
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    contactNumber: '',
    email: '',
    role: 'viewer',
    username: '',
    password: '',
    address: '',
    isActive: true,
};

function UsersPage() {
    const theme = useTheme();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openDialog, setOpenDialog] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    
    // Search and Filter States
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');
    
    const [formData, setFormData] = useState({ ...blankForm });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(`${constants.API_URL}/users`);
            const data = await response.json();
            setUsers(data);
        } catch (err) {
            console.error('Error fetching users:', err);
        }
    };
    
    const filteredUsers = useMemo(() => {
        let filtered = [...users];
        
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(user => 
                user.firstName.toLowerCase().includes(term) ||
                user.lastName.toLowerCase().includes(term) ||
                user.email.toLowerCase().includes(term) ||
                user.username.toLowerCase().includes(term)
            );
        }
        
        if (roleFilter !== 'all') {
            filtered = filtered.filter(user => user.type === roleFilter);
        }
        
        if (statusFilter !== 'all') {
            const isActive = statusFilter === 'active';
            filtered = filtered.filter(user => user.isActive === isActive);
        }
        
        return filtered;
    }, [users, searchTerm, roleFilter, statusFilter]);

    const handleOpenDialog = (user = null) => {
        if (user) {
            setEditingUser(user);
            setFormData({
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age,
                gender: user.gender,
                contactNumber: user.contactNumber,
                email: user.email,
                username: user.username,
                password: '',
                address: user.address,
                role: user.type,
                isActive: user.isActive
            });
        } else {
            setEditingUser(null);
            setFormData({ ...blankForm });
        }
        setError('');
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setEditingUser(null);
        setShowPassword(false);
        setFormData({ ...blankForm });
    };

    const validateForm = () => {
        if (!formData.firstName) return 'First name is required';
        if (!formData.lastName) return 'Last name is required';
        if (!formData.age) return 'Age is required';
        if (isNaN(formData.age)) return 'Age must be a number';
        if (!formData.gender) return 'Gender is required';
        if (!formData.contactNumber) return 'Contact number is required';
        if (!/^\d{11}$/.test(formData.contactNumber)) return 'Contact number must be exactly 11 digits';
        if (!formData.email) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Enter a valid email address';
        if (!formData.username) return 'Username is required';
        if (formData.username.includes(' ')) return 'Username must not contain spaces';
        if (!editingUser && !formData.password) return 'Password is required for new users';
        if (formData.password && formData.password.length < 8) return 'Password must be at least 8 characters';
        if (!formData.address) return 'Address is required';
        return null;
    };

    const handleSubmit = async () => {
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            const url = editingUser 
                ? `${constants.HOST}/users/${editingUser._id}`
                : `${constants.HOST}/users`;
            const method = editingUser ? 'PUT' : 'POST';
            
            const payload = { ...formData, type: formData.role };
            if (!payload.password) delete payload.password;
            
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            
            if (response.ok) {
                fetchUsers();
                handleCloseDialog();
                setSuccess(editingUser ? 'User updated successfully!' : 'User created successfully!');
                setTimeout(() => setSuccess(''), 3000);
            } else {
                const err = await response.json();
                setError(err.message || 'Failed to save user');
            }
        } catch (err) {
            console.error('Error saving user:', err);
            setError('Failed to save user');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
            try {
                const response = await fetch(`${constants.HOST}/users/${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    fetchUsers();
                    setSuccess('User deleted successfully!');
                    setTimeout(() => setSuccess(''), 3000);
                } else {
                    setError('Failed to delete user');
                }
            } catch (err) {
                console.error('Error deleting user:', err);
                setError('Failed to delete user');
            }
        }
    };

    const toggleUserStatus = async (id, currentStatus) => {
        try {
            const response = await fetch(`${constants.HOST}/users/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isActive: !currentStatus }),
            });
            if (response.ok) {
                fetchUsers();
                setSuccess(`User ${!currentStatus ? 'activated' : 'deactivated'} successfully!`);
                setTimeout(() => setSuccess(''), 3000);
            } else {
                setError('Failed to update user status');
            }
        } catch (err) {
            console.error('Error updating user status:', err);
            setError('Failed to update user status');
        }
    };

    const getRoleColor = (role) => {
        switch(role) {
            case 'admin': return '#e02424';
            case 'editor': return '#f093fb';
            default: return '#4facfe';
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { 
            field: 'user', 
            headerName: 'User', 
            width: 220,
            renderCell: (params) => (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, py: 1 }}>
                    <Avatar sx={{ width: 36, height: 36, bgcolor: getRoleColor(params.row.type) }}>
                        {params.row.firstName?.charAt(0)}
                    </Avatar>
                    <Box>
                        <Typography variant="body2" fontWeight="600">
                            {params.row.firstName} {params.row.lastName}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            @{params.row.username}
                        </Typography>
                    </Box>
                </Box>
            )
        },
        { field: 'email', headerName: 'Email', width: 240 },
        { field: 'age', headerName: 'Age', width: 80, type: 'number' },
        { 
            field: 'type', 
            headerName: 'Role', 
            width: 110,
            renderCell: (params) => (
                <Chip 
                    label={params.value.toUpperCase()} 
                    size="small"
                    sx={{ bgcolor: alpha(getRoleColor(params.value), 0.1), color: getRoleColor(params.value), fontWeight: 600 }}
                />
            )
        },
        { 
            field: 'isActive', 
            headerName: 'Status', 
            width: 110,
            renderCell: (params) => (
                <Chip 
                    label={params.value ? 'Active' : 'Inactive'} 
                    size="small"
                    color={params.value ? 'success' : 'default'}
                />
            )
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => (
                <Stack direction="row" spacing={1}>
                    <IconButton size="small" onClick={() => handleOpenDialog(params.row)} title="Edit User" sx={{ color: '#1976d2' }}>
                        <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton 
                        size="small" 
                        onClick={() => toggleUserStatus(params.row._id, params.row.isActive)}
                        title={params.row.isActive ? 'Deactivate User' : 'Activate User'}
                        sx={{ color: params.row.isActive ? '#ed6c02' : '#2e7d32' }}
                    >
                        {params.row.isActive ? '🔴' : '🟢'}
                    </IconButton>
                    <IconButton size="small" onClick={() => handleDelete(params.row._id)} title="Delete User" sx={{ color: '#d32f2f' }}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </Stack>
            )
        }
    ];

    const rows = filteredUsers.map(user => ({
        id: user._id,
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        age: user.age,
        type: user.type,
        isActive: user.isActive,
    }));

    const adminCount = users.filter(u => u.type === 'admin').length;
    const editorCount = users.filter(u => u.type === 'editor').length;
    const viewerCount = users.filter(u => u.type === 'viewer').length;
    const activeCount = users.filter(u => u.isActive).length;

    return (
        <Box>
            {/* Stats Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ bgcolor: '#667eea', color: 'white', borderRadius: 4 }}>
                        <CardContent>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>Total Users</Typography>
                            <Typography variant="h3" fontWeight="bold">{users.length}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ bgcolor: '#e02424', color: 'white', borderRadius: 4 }}>
                        <CardContent>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>Admins</Typography>
                            <Typography variant="h3" fontWeight="bold">{adminCount}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ bgcolor: '#f093fb', color: 'white', borderRadius: 4 }}>
                        <CardContent>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>Editors</Typography>
                            <Typography variant="h3" fontWeight="bold">{editorCount}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ bgcolor: '#4facfe', color: 'white', borderRadius: 4 }}>
                        <CardContent>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>Active Users</Typography>
                            <Typography variant="h3" fontWeight="bold">{activeCount}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Header */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h4" fontWeight="700" sx={{ letterSpacing: '-0.02em' }}>
                    User Management
                </Typography>
                <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpenDialog()} sx={{ borderRadius: 2 }}>
                    Add New User
                </Button>
            </Stack>

            {/* Search and Filter Bar */}
            <Paper sx={{ p: 2, mb: 3, borderRadius: 4 }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
                    <TextField
                        size="small"
                        placeholder="Search by name, email, or username..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{ flex: 2 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    
                    <FormControl size="small" sx={{ minWidth: 120 }}>
                        <InputLabel>Role</InputLabel>
                        <Select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} label="Role">
                            <MenuItem value="all">All Roles</MenuItem>
                            <MenuItem value="admin">Admin</MenuItem>
                            <MenuItem value="editor">Editor</MenuItem>
                            <MenuItem value="viewer">Viewer</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl size="small" sx={{ minWidth: 120 }}>
                        <InputLabel>Status</InputLabel>
                        <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} label="Status">
                            <MenuItem value="all">All Status</MenuItem>
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>

                    <Button variant="outlined" onClick={() => { setSearchTerm(''); setRoleFilter('all'); setStatusFilter('all'); }} sx={{ borderRadius: 2 }}>
                        Clear Filters
                    </Button>
                </Stack>
            </Paper>

            {error && <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }} onClose={() => setError('')}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2, borderRadius: 2 }} onClose={() => setSuccess('')}>{success}</Alert>}

            {/* Users Table */}
            <Paper sx={{ p: 2, borderRadius: 4, overflow: 'hidden' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    loading={loading}
                    getRowId={(row) => row._id}
                    pageSizeOptions={[5, 10, 25, 50]}
                    initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
                    disableRowSelectionOnClick
                    sx={{ border: 'none' }}
                />
            </Paper>

            {/* Add/Edit User Dialog */}
            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ bgcolor: alpha('#e02424', 0.05), borderBottom: '1px solid #e5e7eb' }}>
                    <Typography variant="h6" fontWeight="600">
                        {editingUser ? 'Edit User' : 'Add New User'}
                    </Typography>
                </DialogTitle>
                <DialogContent sx={{ mt: 2 }}>
                    <Stack spacing={2.5}>
                        <Stack direction="row" spacing={2}>
                            <TextField label="First Name" fullWidth name="firstName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required />
                            <TextField label="Last Name" fullWidth name="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required />
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <TextField label="Age" type="number" fullWidth name="age" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} required />
                            <TextField label="Gender" select fullWidth name="gender" value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} required>
                                {genders.map((g) => <MenuItem key={g} value={g}>{g.charAt(0).toUpperCase() + g.slice(1)}</MenuItem>)}
                            </TextField>
                        </Stack>

                        <TextField label="Contact Number" fullWidth name="contactNumber" value={formData.contactNumber} onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })} placeholder="09123456789" helperText="Must be exactly 11 digits" required />
                        <TextField label="Email" type="email" fullWidth name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />

                        <Stack direction="row" spacing={2}>
                            <TextField label="Username" fullWidth name="username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} helperText="No spaces allowed" required />
                            <TextField label="Role" select fullWidth name="role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} required>
                                {roles.map((r) => <MenuItem key={r} value={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</MenuItem>)}
                            </TextField>
                        </Stack>

                        <TextField
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            name="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            helperText={editingUser ? "Leave blank to keep current password" : "At least 8 characters"}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <MuiIconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </MuiIconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField label="Address" fullWidth multiline rows={2} name="address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} required />
                    </Stack>
                </DialogContent>
                <DialogActions sx={{ p: 2.5, borderTop: '1px solid #e5e7eb' }}>
                    <Button onClick={handleCloseDialog} variant="outlined">Cancel</Button>
                    <Button onClick={handleSubmit} variant="contained">{editingUser ? 'Update User' : 'Create User'}</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default UsersPage;