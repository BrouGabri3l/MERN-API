
const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const errorController = require('./controllers/errController')
const cors = require('cors')
app.use(bodyParser.json())
app.use(cors())
//routes

const Routes = require('./routes/api')

mongoose.connect(process.env.MONGODB_URI)

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

