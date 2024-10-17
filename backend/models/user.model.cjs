const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    creationDate: { type: Date, required: false, default: Date.now },
    classement: { type: Number, required: false },
    recordWPM: { type: Number, required: false },
    moyenneWPM: { type: Number, required: false },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;