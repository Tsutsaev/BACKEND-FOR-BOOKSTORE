const { json } = require('express')
const Book = require('../models/Book.model')
module.exports.booksController = {
    addBook: async (req, res) => {
       try {
        const addBook = await Book.create({
            bookName:req.body.bookName,
            bookАuthor:req.body.bookАuthor,
            bookGenre: req.body.bookGenre
        })
        res.json(addBook)
       } catch(err) {
        return res.json(err)
       }
    },
    deleteBook: async (req, res) => {
        try {
            const deleteBook = await Book.findByIdAndDelete(req.params.id)
            res.json(deleteBook)
        } 
        catch (err) {
            return res.json(err)
        }
        
    },
    changeBook: async (req,res) => {
        try {
            const changeBook = await Book.findByIdAndUpdate(req.params.id, {
                bookName:req.body.bookName
            })
            res.json(changeBook)
        }
        catch (err) {
            res.json(err)
        }
    },
    getBook: async (req, res) => {
        try  {
            const getBook = await Book.findById(req.params.id)
            res.json(getBook)
        } catch (err) {
            res.json(err)
        }
    },
    getBooks: async (req, res) => {
        try  {
            const getBooks = await Book.find().populate('bookАuthor bookGenre', "-_id -__v") 
            res.json(getBooks)
            
        } catch (err) {
            res.json(err)
        }
    },
    getBooksGenre: async (req, res) => {
        try {
            const getBooksGenre = await Book.find({bookGenre:req.params.id}).populate('bookGenre') 
            res.json(getBooksGenre)
        } catch (err) {
            res,json(err)
        }
    }
}