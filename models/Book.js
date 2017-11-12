let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BookSchema = new Schema({
    name:{
        type:String
    },
    author:{
        type:String,
    },
    genre: {
        type:String
    }
})

module.exports = mongoose.model('Book', BookSchema);