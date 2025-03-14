const express = require('express');
const router = express.Router();
const Player = require('../models/Player');
const ExcelJS = require('exceljs');

// Add a player and assign a team
router.post('/add', async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });

    try {
        // Check if player already exists
        const existingPlayer = await Player.findOne({ name });
        if (existingPlayer) return res.status(400).json({ error: 'Player name must be unique' });

        // Assign a random team (Team 1, Team 2, Team 3, or Team 4)
        const team = `Team ${Math.floor(Math.random() * 4) + 1}`;

        // Save player to database
        const player = new Player({ name, team });
        await player.save();

        res.json({ message: 'Player added successfully', player });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Export players to Excel (admin-only)
router.get('/export', async (req, res) => {
    if (!req.session.isAdmin) return res.status(403).send('Unauthorized');

    try {
        const players = await Player.find();

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Players');
        worksheet.addRow(['Name', 'Team']);

        players.forEach(player => {
            worksheet.addRow([player.name, player.team]);
        });

        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=players.xlsx');

        await workbook.xlsx.write(res);
        res.end();
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;