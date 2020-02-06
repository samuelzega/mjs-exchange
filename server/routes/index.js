var express = require('express')
var router = express.Router()
const stocks = require('./stock')

router.use('/users', require('./users'))
router.use('/stocks', stocks)

module.exports = router
