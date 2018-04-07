const mongoose = require('mongoose');

var partSchema = mongoose.Schema({
    partNumber: Number,
    ledColor: String
 });

var Part = mongoose.model('Part', partSchema);

module.exports.Part = Part;