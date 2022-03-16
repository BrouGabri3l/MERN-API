const express = require('express')
const router = express()
//Controlador das funções da api
const apiController = require(`../controllers/apiController`)
//definindo rotas
router.get('/users', apiController.getUsers)
router.post('/addUser', apiController.add)
router.get('/editUser/:id', apiController.edit)
router.put('/modifyUser/:id', apiController.update)
router.delete('/delUser/:id', apiController.delete)
router.get('/test', apiController.test)
//exportando rotas
module.exports = router