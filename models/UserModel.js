//Definindo modelo do bancod de dados
const mongoose = require('mongoose')
const User = mongoose.model('User', { name: String, idade: Number, email: String })
module.exports = User