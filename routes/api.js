const express = require('express')
const router = express.Router()
const apiController = require(`../controllers/apiController`)

router.get('/users', apiController.getUsers)
router.post('/addUser', apiController.add)
router.get('/editUser/:id', apiController.edit)
router.put('/modifyUser/:id', apiController.update)
router.delete('/delUser/:id', apiController.delete)

module.exports = router