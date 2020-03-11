const mongoose = require('mongoose');
const schema = mongoose.Schema;
const authSchema = new schema({
    fullName:{type:String},
    email:{type:String},
    password:{type:String},

})
module.exports = mongoose.model('auth',authSchema)