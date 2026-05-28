const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: [String],
        required: true,
        default: []
    },
    paragraph: {
        type: Number,
        default: 0
    },
    preview: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        enum: ['draft', 'published', 'archived'],
        default: 'draft'
    },
    category: {
        type: String,
        default: 'Uncategorized'
    },
    readTime: {
        type: String,
        default: '5 min read'
    },
    imageUrl: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update the updatedAt timestamp on save
articleSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Update paragraph count before saving
articleSchema.pre('save', function(next) {
    this.paragraph = this.content.length;
    if (this.content.length > 0 && !this.preview) {
        this.preview = this.content[0].substring(0, 150) + '...';
    }
    next();
});

module.exports = mongoose.model('Article', articleSchema);