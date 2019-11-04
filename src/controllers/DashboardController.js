const Movie = require('../models/Movie')

module.exports = {
    async show(req, res){
        const movies = await Movie.find()
        return res.send(movies)
    }
}