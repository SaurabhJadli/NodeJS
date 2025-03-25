require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('./passport-config');
const connectDB = require('./db');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(passport.initialize());

connectDB();

// Google OAuth Login Route
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google OAuth Callback Route
app.get('/auth/google/callback',
    passport.authenticate('google', { session: false }),
    (req, res) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        res.json({ user: req.user.user, token: req.user.token });

    }
);

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid Token' });
    }
};

// Protected Route Example
app.get('/protected', authenticateJWT, (req, res) => {
    res.json({ message: 'Access granted!', user: req.user });
});

// Start Server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
