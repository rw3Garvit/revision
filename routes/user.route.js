const express = require('express')
const { userController } = require('../controllers')
const { autheticate, restrict } = require('../middleware/auth')
const upload = require('../middleware/multer')
const route = express.Router()


route.post('/register',upload.single('imageName'), userController.register)
route.post('/login',userController.login)
route.get('/profile',autheticate,restrict(['admin','user']),userController.getProfile)
route.get('/user',autheticate,userController.getProfile)



module.exports = route