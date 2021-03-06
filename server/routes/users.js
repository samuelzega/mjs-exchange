var express = require('express')
var router = express.Router()
const User = require('../controllers/User')
const googleVerify = require('../middlewares/googleVerify')

/* GET users listing. */
router.post('/')
router.post('/login', User.login)
router.post('/register', User.register)
router.patch('/change-password', User.changePassword)
router.post('/google/login', googleVerify, User.googleLogin)

module.exports = router
