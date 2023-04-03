const mongoose = require('mongoose')


const dataSchema =new mongoose.Schema({
    movieName:{type:String,required:true},
    language:{type:String,required:true},
    ratings:{type: Number,required:true}
})

let dataModel = new mongoose.model('data-details', dataSchema)

module.exports = { mongoose , dataModel }