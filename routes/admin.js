const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

// Admin login page
router.get('/login', (req, res) => {
    res.sendFile('admin-login.html', { root: './public' });
});

// Admin login handler
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin123') {
        req.session.isAdmin = true;
        res.redirect('/admin/dashboard');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Admin dashboard
router.get('/dashboard', (req, res) => {
    if (!req.session.isAdmin) return res.redirect('/admin/login');
    res.sendFile('admin-dashboard.html', { root: './public' });
});

// Reset balloting (clear all players)
router.post('/reset', async (req, res) => {
    if (!req.session.isAdmin) return res.status(403).send('Unauthorized');

    try {
        await Player.deleteMany({});
        res.json({ message: 'Balloting reset successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Admin logout
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/admin/login');
});

module.exports = router;