var express = require('express')
var router = express.Router()
const User = require('../controllers/User')

/* GET users listing. */
router.post('/')
router.post('/login', User.login)
router.post('/register', User.register)

module.exports = router
