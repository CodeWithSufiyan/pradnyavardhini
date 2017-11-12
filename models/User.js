var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// // set up a mongoose model and pass it using module.exports
// module.exports = mongoose.model('User', new Schema({ 
//     name: String, 
//     password: String, 
//     admin: Boolean 
// }));                

var UserSchema = new Schema({
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    username:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
    passwordConfirm:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('user', UserSchema);