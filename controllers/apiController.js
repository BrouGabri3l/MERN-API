const User = require('../models/UserModel')

exports.add = (req, res, err) => {
    User.create(req.body).then(User => {
        res.send(User)
    }).catch(err)
}
exports.getUsers = (req, res, err) => {
    User.find(req.body).then(User => {
        res.send(User)
    }).catch(err)
}
exports.edit = (req, res, err) => {
    User.findById(req.params.id).then((User) => {
        res.json(User)
    }).catch(err)
}
exports.update = (req, res, err) => {
    User.findByIdAndUpdate(req.params.id, req.body).then(result => {
        if (!result) {
            res.status(400).send({ message: 'Usuário não encontrado' })
        } else {
            res.send(result)
        }
    })
}
exports.delete = (req, res, err) => {
    User.findByIdAndDelete({ _id: req.params.id })
        .then((result) => {
            res.send(result)
        }).catch(err)
}
