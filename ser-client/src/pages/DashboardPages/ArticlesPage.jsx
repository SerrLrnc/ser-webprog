import React, { useState, useEffect } from 'react';
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
    Grid,
    Card,
    CardContent,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArticleIcon from '@mui/icons-material/Article';
import constants from '../../constants';

function ArticlesPage() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openDialog, setOpenDialog] = useState(false);
    const [editingArticle, setEditingArticle] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        content: [''],
        category: '',
        status: 'draft'
    });

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await fetch(`${constants.HOST}/articles`);
            const data = await response.json();
            setArticles(data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching articles:', err);
            setError('Failed to load articles');
            setLoading(false);
        }
    };

    const handleOpenDialog = (article = null) => {
        if (article) {
            setEditingArticle(article);
            setFormData({
                title: article.title,
                content: article.content,
                category: article.category || '',
                status: article.status
            });
        } else {
            setEditingArticle(null);
            setFormData({
                title: '',
                content: [''],
                category: '',
                status: 'draft'
            });
        }
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setEditingArticle(null);
        setFormData({
            title: '',
            content: [''],
            category: '',
            status: 'draft'
        });
    };

    const handleSubmit = async () => {
        try {
            const url = editingArticle 
                ? `${constants.HOST}/articles/${editingArticle._id}`
                : `${constants.HOST}/articles`;
            const method = editingArticle ? 'PUT' : 'POST';
            
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                fetchArticles();
                handleCloseDialog();
                setSuccess(editingArticle ? 'Article updated!' : 'Article created!');
                setTimeout(() => setSuccess(''), 3000);
            } else {
                const err = await response.json();
                setError(err.message || 'Failed to save article');
            }
        } catch (err) {
            console.error('Error saving article:', err);
            setError('Failed to save article');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Delete this article?')) {
            try {
                const response = await fetch(`${constants.HOST}/articles/${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    fetchArticles();
                    setSuccess('Article deleted!');
                    setTimeout(() => setSuccess(''), 3000);
                } else {
                    setError('Failed to delete article');
                }
            } catch (err) {
                console.error('Error deleting article:', err);
                setError('Failed to delete article');
            }
        }
    };

    const columns = [
        { field: 'title', headerName: 'Title', width: 280 },
        { field: 'slug', headerName: 'Slug', width: 220 },
        { field: 'paragraph', headerName: 'Paragraphs', width: 110 },
        { 
            field: 'status', 
            headerName: 'Status', 
            width: 130,
            renderCell: (params) => (
                <Chip 
                    label={params.value} 
                    color={params.value === 'published' ? 'success' : params.value === 'draft' ? 'warning' : 'default'}
                    size="small"
                />
            )
        },
        { field: 'category', headerName: 'Category', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 120,
            renderCell: (params) => (
                <Stack direction="row" spacing={1}>
                    <IconButton size="small" onClick={() => handleOpenDialog(params.row)} sx={{ color: '#1976d2' }}>
                        <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="error" onClick={() => handleDelete(params.row._id)}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </Stack>
            )
        }
    ];

    const rows = articles.map(article => ({
        id: article._id,
        _id: article._id,
        title: article.title,
        slug: article.slug,
        paragraph: article.paragraph,
        status: article.status,
        category: article.category,
        content: article.content
    }));

    return (
        <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
            {/* Stats Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ bgcolor: '#667eea', color: 'white' }}>
                        <CardContent>
                            <Typography variant="h6">Total Articles</Typography>
                            <Typography variant="h3" fontWeight="bold">{articles.length}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ bgcolor: '#10b981', color: 'white' }}>
                        <CardContent>
                            <Typography variant="h6">Published</Typography>
                            <Typography variant="h3" fontWeight="bold">{articles.filter(a => a.status === 'published').length}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ bgcolor: '#f59e0b', color: 'white' }}>
                        <CardContent>
                            <Typography variant="h6">Drafts</Typography>
                            <Typography variant="h3" fontWeight="bold">{articles.filter(a => a.status === 'draft').length}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Header */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h4" fontWeight="bold">
                    Articles
                </Typography>
                <Button 
                    variant="contained" 
                    startIcon={<AddIcon />} 
                    onClick={() => handleOpenDialog()}
                    sx={{ py: 1, px: 3 }}
                >
                    New Article
                </Button>
            </Stack>

            {error && (
                <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError('')}>
                    {error}
                </Alert>
            )}

            {success && (
                <Alert severity="success" sx={{ mb: 2 }} onClose={() => setSuccess('')}>
                    {success}
                </Alert>
            )}

            <Paper sx={{ height: 500, width: '100%', overflow: 'hidden' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    loading={loading}
                    getRowId={(row) => row._id}
                    pageSizeOptions={[5, 10, 25]}
                    initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
                    disableRowSelectionOnClick
                />
            </Paper>

            {/* Add/Edit Dialog */}
            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
                <DialogTitle sx={{ bgcolor: '#f5f5f5', py: 2 }}>
                    <Typography variant="h6">
                        {editingArticle ? '✏️ Edit Article' : '📝 Create New Article'}
                    </Typography>
                </DialogTitle>
                <DialogContent sx={{ mt: 2 }}>
                    <Stack spacing={2.5}>
                        <TextField
                            label="Title"
                            fullWidth
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                        <TextField
                            label="Category"
                            fullWidth
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        />
                        <TextField
                            label="Status"
                            select
                            fullWidth
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                            SelectProps={{ native: true }}
                        >
                            <option value="draft">📄 Draft</option>
                            <option value="published">🚀 Published</option>
                            <option value="archived">📦 Archived</option>
                        </TextField>
                        
                        <Typography variant="h6">📖 Content</Typography>
                        {formData.content.map((paragraph, index) => (
                            <TextField
                                key={index}
                                label={`Paragraph ${index + 1}`}
                                fullWidth
                                multiline
                                rows={3}
                                value={paragraph}
                                onChange={(e) => {
                                    const newContent = [...formData.content];
                                    newContent[index] = e.target.value;
                                    setFormData({ ...formData, content: newContent });
                                }}
                            />
                        ))}
                        <Button 
                            variant="outlined" 
                            onClick={() => setFormData({ ...formData, content: [...formData.content, ''] })}
                            sx={{ alignSelf: 'flex-start' }}
                        >
                            + Add Paragraph
                        </Button>
                    </Stack>
                </DialogContent>
                <DialogActions sx={{ p: 2.5, bgcolor: '#f5f5f5' }}>
                    <Button onClick={handleCloseDialog} variant="outlined">Cancel</Button>
                    <Button onClick={handleSubmit} variant="contained">
                        {editingArticle ? 'Update Article' : 'Create Article'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default ArticlesPage;