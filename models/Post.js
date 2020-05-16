const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const userManagementSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    emailID:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model ('Post',userManagementSchema )