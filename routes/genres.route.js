const {Router} = require('express')
const router = Router()
const {genresController} = require('../controllers/genres.controller')

router.post('/genres',genresController.addGenre)
router.delete('/genres/:id',genresController.deleteGenre)
router.get('/genres',genresController.getGenres)


module.exports = router