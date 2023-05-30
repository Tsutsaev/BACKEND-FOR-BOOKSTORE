const mongoose = require('mongoose')
const reviewSchema = mongoose.Schema({
    textReview:String,
    nameAuthorReview:String,
    bookReview:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book'
    }
})


const Review = mongoose.model('Review',reviewSchema)
module.exports = Review



