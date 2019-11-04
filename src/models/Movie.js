const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    thumbnail: String,
    genre: [String],
    title: String,
    score: String,
    imdb: String,
    id: Number
})

module.exports = mongoose.model('Movie', MovieSchema)