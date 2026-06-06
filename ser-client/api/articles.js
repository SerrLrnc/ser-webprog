export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Sample articles data
    const articles = [
        { id: 1, title: 'Getting Started with React', slug: 'getting-started-with-react', status: 'published', category: 'React' },
        { id: 2, title: 'Tailwind CSS Tutorial', slug: 'tailwind-css-tutorial', status: 'published', category: 'CSS' },
        { id: 3, title: 'Understanding useState Hook', slug: 'understanding-usestate', status: 'draft', category: 'React' }
    ];

    if (req.method === 'GET') {
        return res.status(200).json(articles);
    }

    if (req.method === 'POST') {
        const newArticle = { id: articles.length + 1, ...req.body };
        return res.status(201).json(newArticle);
    }

    return res.status(405).json({ message: 'Method not allowed' });
}