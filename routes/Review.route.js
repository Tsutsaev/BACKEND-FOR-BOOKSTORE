const {Router} = require('express')
const router = Router()
const {reviewController} = require('../controllers/Review.controller')

router.post('/review',reviewController.addReview)
router.delete('/review/:id',reviewController.deleteReview)
router.get('/review/:id',reviewController.getAllReview)

module.exports = router