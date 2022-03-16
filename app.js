
const express = require('express')
//porta
const PORT = process.env.PORT || 3001
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const errorController = require('./controllers/errController')
//cors
const cors = require('cors')
app.use(bodyParser.json())
app.use(cors())
//Rotas
const Routes = require('./routes/api')
//Banco de dados
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Admin:tm9bBE0afM71S6Ch@cluster0.roavo.mongodb.net/HelloWorld?retryWrites=true&w=majority')

mongoose.connection.on('connected', () => {
    console.log(`conectado ao banco de dados`)
})
mongoose.connection.on('error', err => {
    console.log('database error')
})
//usando Rotas
app.use('/api', Routes)
//usando Controlador de Erros
app.use(errorController)
//Iniciando app
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})
module.exports = app

