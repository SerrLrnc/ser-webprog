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

    // For demo purposes - return mock users
    const users = [
        { id: 1, firstName: 'Admin', lastName: 'User', email: 'admin@lab.dev', type: 'admin', isActive: true },
        { id: 2, firstName: 'James', lastName: 'Wilson', email: 'james.wilson@ser.dev', type: 'admin', isActive: true }
    ];

    if (req.method === 'GET') {
        return res.status(200).json(users);
    }

    if (req.method === 'POST') {
        return res.status(201).json({ message: 'User created', user: req.body });
    }

    res.status(405).json({ message: 'Method not allowed' });
}