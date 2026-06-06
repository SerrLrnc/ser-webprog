export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    // Demo users for testing
    const users = {
        'admin@lab.dev': { password: 'admin123', type: 'admin', firstName: 'Admin' },
        'james.wilson@ser.dev': { password: 'James123!', type: 'admin', firstName: 'James' }
    };

    const user = users[email];

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    return res.status(200).json({
        message: 'Login successful',
        token: 'mock-jwt-token-' + Date.now(),
        type: user.type,
        firstName: user.firstName
    });
}