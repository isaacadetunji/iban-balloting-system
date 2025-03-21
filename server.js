const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');
const playerRoutes = require('./routes/players');
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://<bukolaadetunji73>:<fdSF52YV7voVcUX2>@cluster0.vxxcm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Routes
app.use('/api/players', playerRoutes);
app.use('/admin', adminRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the admin login page
router.get('/admin/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/admin-login.html'));
});

// Serve the admin dashboard
router.get('/admin/dashboard', (req, res) => {
    if (!req.session.isAdmin) return res.redirect('/admin/login');
    res.sendFile(path.join(__dirname, '../public/admin-dashboard.html'));
});

module.exports = router;
