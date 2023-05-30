const mongoose = require('mongoose')
const bookSchema = mongoose.Schema({
    bookName:String,
    bookАuthor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Author'
    },
    bookGenre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Genre'
    } 
})

const Book = mongoose.model('Book',bookSchema)
module.exports = Book