const mongoose = require('mongoose');
const whoSchema = mongoose.Schema({
    avatarIcon: String,
    userName: String,
    handle: String
}, {collection: 'who'});
module.exports = whoSchema;