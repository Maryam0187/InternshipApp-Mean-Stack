const mongoose = require('mongoose');

var Student = mongoose.model('Student',{
    name:{type :String},
    password:{type:String},
    rollnumber:{type: String},
    email:{type:String}
});

module.exports = {Student};