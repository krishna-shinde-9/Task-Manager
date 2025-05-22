
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ejs")

const scheam =  mongoose.Schema({
userId:Number,
name:String,
password:String


})

module.exports =   mongoose.model('user',scheam)