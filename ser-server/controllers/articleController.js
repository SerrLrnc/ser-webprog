const Article = require('../models/Article');

// Get all articles
const getArticles = async (req, res) => {
    try {
        const articles = await Article.find().sort({ createdAt: -1 });
        res.json(articles);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get single article by slug
const getArticleBySlug = async (req, res) => {
    try {
        const article = await Article.findOne({ slug: req.params.slug });
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get single article by ID
const getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Create a new article
const createArticle = async (req, res) => {
    try {
        // Generate slug from title if not provided
        if (!req.body.slug && req.body.title) {
            req.body.slug = req.body.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');
        }
        
        const article = await Article.create(req.body);
        res.status(201).json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an article
const updateArticle = async (req, res) => {
    try {
        // Update slug if title changed
        if (req.body.title && !req.body.slug) {
            req.body.slug = req.body.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');
        }
        
        const article = await Article.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an article
const deleteArticle = async (req, res) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json({ message: 'Article deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Search articles
const searchArticles = async (req, res) => {
    try {
        const { q } = req.query;
        const articles = await Article.find({
            $or: [
                { title: { $regex: q, $options: 'i' } },
                { slug: { $regex: q, $options: 'i' } },
                { content: { $regex: q, $options: 'i' } }
            ]
        });
        res.json(articles);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getArticles,
    getArticleBySlug,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
    searchArticles
};