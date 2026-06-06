export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Sample users data
    const users = [
        { id: 1, firstName: 'Admin', lastName: 'User', email: 'admin@lab.dev', type: 'admin', isActive: true },
        { id: 2, firstName: 'James', lastName: 'Wilson', email: 'james.wilson@ser.dev', type: 'admin', isActive: true },
        { id: 3, firstName: 'Editor', lastName: 'User', email: 'editor@lab.dev', type: 'editor', isActive: true },
        { id: 4, firstName: 'Viewer', lastName: 'User', email: 'viewer@lab.dev', type: 'viewer', isActive: true }
    ];

    if (req.method === 'GET') {
        return res.status(200).json(users);
    }

    if (req.method === 'POST') {
        const newUser = { id: users.length + 1, ...req.body };
        return res.status(201).json(newUser);
    }

    return res.status(405).json({ message: 'Method not allowed' });
}