const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    classement: { type: Number, required: false },
    recordWPM: { type: Number, required: false },
    moyenneWPM: { type: Number, required: false },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;