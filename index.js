const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')


app.use(express.json())
app.use(require('./routes/books.route'))
app.use(require('./routes/authors.route'))
app.use(require('./routes/genres.route'))
app.use(require('./routes/Review.route'))



mongoose.connect('mongodb+srv://djamalayl32:yakhya@cluster0.eb0ykyh.mongodb.net/books-shop')
.then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch(() => console.log('Ошибка при соединении с сервером MongoDB'))




app.listen(3000, () => {
    console.log('Сервер запущен успешно');
})