const Movie = require('../models/Movie')

module.exports = {
    async store(req, res){
        const {genre, title, score, imdb, id, thumbnail} = req.body
        const movie = await Movie.create({
            genre: genre.split(',').map(tech => tech.trim()),
            title: title,
            score: score,
            imdb: imdb,
            id:id,
            thumbnail: thumbnail
        })
        res.json(movie)
        
       return res.json({ok: true})
    },

    async index(req, res){
        const {filtro} = req.headers
        const movies = await Movie.find({genre: filtro})
        res.send(movies)
    },
    
    async delete(req, res){
        const {filtro} = req.headers
        movies = await Movie.findOneAndDelete({_id: filtro})
        //movies = await Movie.remove()
        ///const movies = await Movie.findOneAndDelete({title: filtro})
        res.send(movies)
    }
}