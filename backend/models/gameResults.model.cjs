const mongoose = require('mongoose');

const gameResultsSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    wpm: { type: Number, required: true },
    date: { type: Date, required: false, default: Date.now },
});

const GameResultsModel = mongoose.model('GameResults', gameResultsSchema);

module.exports = GameResultsModel;