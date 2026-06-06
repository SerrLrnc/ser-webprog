export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    // Demo users
    const validUsers = {
        'admin@lab.dev': { password: 'admin123', type: 'admin', firstName: 'Admin' },
        'james.wilson@ser.dev': { password: 'James123!', type: 'admin', firstName: 'James' }
    };

    const user = validUsers[email];

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    return res.status(200).json({
        message: 'Login successful',
        token: 'mock-token-' + Date.now(),
        type: user.type,
        firstName: user.firstName
    });
}