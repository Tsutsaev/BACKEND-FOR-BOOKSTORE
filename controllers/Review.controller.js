const Review = require('../models/Review.model')

module.exports.reviewController = {
    addReview: async (req, res) => {
       try {
        const addReview = await Review.create({
            textReview:req.body.textReview,
            nameAuthorReview:req.body.nameAuthorReview,
            bookReview:req.body.bookReview});
        res.json(addReview)
       } catch(err) {
        res.json(err)
       }
    },
    deleteReview: async (req,res) => {
        try {
            const deleteReview = await Review.findByIdAndDelete(req.params.id)
            res.json(deleteReview)
        } catch (err) {
            res.json(err)
        }
    },
    getAllReview: async(req, res) => {
        try {
            const getAllReview = await Review.find({bookReview:req.params.id})
            res.json(getAllReview)
        } catch (err) {
            res.json(err)
        }
    }
}

