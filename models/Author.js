var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    name: {
        type: String
    }
});

module.exports = mongoose.model('author', AuthorSchema);