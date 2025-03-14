const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    team: { type: String, required: true },
});

module.exports = mongoose.model('Player', playerSchema);