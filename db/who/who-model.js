const mongoose = require('mongoose');
const whoSchema = require('./who-schema');
const whoModel = mongoose.model('WhoModel', whoSchema);
module.exports = whoModel;