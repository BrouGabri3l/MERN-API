//Definindo modelo do bancod de dados
const mongoose = require('mongoose')
const User = mongoose.model('User', { nome: String, nascimento: Date, email: String, sexo: String, endereco: String, _endNumero: Number, _endBairro: String, CEP: String, UF: String, Cidade: String })
module.exports = User