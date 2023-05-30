const Genre = require('../models/Genre.model')

module.exports.genresController = {
    addGenre: async (req,res) => {
        try {
            const addGenre = await Genre.create({
                genreName:req.body.genreName,
                genredescription:req.body.genredescription 
            })
            res.json(addGenre)
        } catch(err) {
        res.json(err)
        }
    },
    deleteGenre: async (req,res) => {
        try {
            const deleteGenre = await Genre.findByIdAndRemove(req.params.id)
            res.json(deleteGenre)
        } catch(err) {
            res.json(err)
        }
    },
    getGenres: async (req, res) => {
        try {
            const getGenres = await Genre.find()
            res.json(getGenres)
        } catch (err) {
            res.json(err)
        }
    }
}