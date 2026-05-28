const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Create a new user
const createUser = async (req, res) => {
    try {
        // Hash the password
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a user
const updateUser = async (req, res) => {
    try {
        // Check if the password is being updated
        if (req.body.password) {
            // Hash the new password
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }

        // Update the user with the new data
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Login user (Updated with role check)
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the user is active
        if (!user.isActive) {
            return res.status(403).json({ message: 'Your account is inactive. Please contact support.' });
        }

        // Check if user has access (viewers can login, editors and admins too)
        // All roles can login - no restriction here

        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email, type: user.type },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ 
            message: 'Login successful', 
            token, 
            type: user.type, 
            firstName: user.firstName,
            id: user._id
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getUsers, createUser, updateUser, deleteUser, loginUser };