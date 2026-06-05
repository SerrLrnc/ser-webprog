const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// MongoDB connection
const MONGODB_URI = process.env.MONGO_URL;

let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

// User Schema
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: String,
    gender: String,
    contactNumber: String,
    email: String,
    username: String,
    password: String,
    address: String,
    type: String,
    isActive: Boolean
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

// GET /api/users
export default function handler(req, res) {
    res.status(200).json({ message: 'API is working!' });
}


    if (req.method === 'GET') {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    if (req.method === 'POST') {
        try {
            if (req.body.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            }
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}