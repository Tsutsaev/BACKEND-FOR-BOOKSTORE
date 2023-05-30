const {Router} = require('express')
const router = Router()
const {booksController} = require('../controllers/books.controller')

router.post('/books',booksController.addBook)
router.patch('/books/:id',booksController.changeBook)
router.delete('/books/:id', booksController.deleteBook)
router.get('/books/:id',booksController.getBook)
router.get('/books',booksController.getBooks)
router.get('/books/genre/:id',booksController.getBooksGenre)


module.exports = router