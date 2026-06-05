export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // For testing, accept admin@lab.dev / admin123
    const { email, password } = req.body;

    if (email === 'admin@lab.dev' && password === 'admin123') {
        return res.status(200).json({
            message: 'Login successful',
            token: 'test-token-123',
            type: 'admin',
            firstName: 'Admin'
        });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
}