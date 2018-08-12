const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    birthday: String,
    favouriteFood: String
});

module.exports = mongoose.model('users', userSchema);