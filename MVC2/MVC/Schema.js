const mongoose=require('mongoose')
const validation=new mongoose.Schema({
    FName:String,
    LName:String,
    Email:String,
    Password:String
})
module.exports=mongoose.model('details',validation)