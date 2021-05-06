const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nasaImg = new Schema({
    url: String,
    title: String,
    description: String
})

const NasaImg = mongoose.model('NasaImg', nasaImg) 

module.exports = NasaImg