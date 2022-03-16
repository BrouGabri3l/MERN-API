//Modelo de BD
const User = require('../models/UserModel')
//Definindo Funções do CRUD
//Adicionar Usuário
exports.add = (req, res, err) => {
    User.create(req.body).then(User => {
        res.send(User)
    }).catch(err)
}
//GET usuários
exports.getUsers = (req, res, err) => {
    User.find(req.body).then(User => {
        res.send(User)
    }).catch(err)
}
//ENCONTRAR usuários para editar
exports.edit = (req, res, err) => {
    User.findById(req.params.id).then((User) => {
        res.json(User)
    }).catch(err)
}
//EDITAR usuários
exports.update = (req, res, err) => {
    User.findByIdAndUpdate(req.params.id, req.body).then(result => {
        if (!result) {
            res.status(400).send({ message: 'Usuário não encontrado' })
        } else {
            res.send(result)
        }
    })
}
//DELETAR usuários
exports.delete = (req, res, err) => {
    User.findByIdAndDelete({ _id: req.params.id })
        .then((result) => {
            res.send(result)
        }).catch(err)
}
//Função Teste
exports.test = (req, res) => {
    res.send({ message: "Hello World" })
}
