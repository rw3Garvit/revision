const express = require('express')
const { userController } = require('../controllers')
const { autheticate } = require('../middleware/auth')
const route = express.Router()


route.post('/register',userController.register)
route.post('/login',userController.login)
route.get('/profile',autheticate,userController.getProfile)


module.exports = route