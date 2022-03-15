
const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const errorController = require('./controllers/errController')
app.use(bodyParser.json())
//routes

const Routes = require('./routes/api')

mongoose.connect('mongodb+srv://Admin:tm9bBE0afM71S6Ch@cluster0.roavo.mongodb.net/HelloWorld?retryWrites=true&w=majority')

mongoose.connection.on('connected', () => {
    console.log(`conectado ao banco de dados`)
})
mongoose.connection.on('error', err => {
    console.log('database error')
})
app.use('/api', Routes)
// app.use(errorController)
app.use(errorController)
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

