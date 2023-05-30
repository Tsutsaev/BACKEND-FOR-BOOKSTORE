const {Router} = require('express')
const router = Router()
const {authorsController} = require('../controllers/authors.controller')

router.post('/author',authorsController.addAuthor)


module.exports = router