const express = require('express');
const {
    getArticles,
    getArticleBySlug,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
    searchArticles
} = require('../controllers/articleController');

const router = express.Router();

router.get('/', getArticles);
router.get('/search', searchArticles);
router.get('/slug/:slug', getArticleBySlug);
router.get('/:id', getArticleById);
router.post('/', createArticle);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

module.exports = router;