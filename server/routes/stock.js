const router = require('express').Router()
const Stock = require('../controllers/Stock')


router.get('/mostactive', Stock.getMostActiveStock)
router.get('/mostgainer', Stock.getMostGainerStock)
router.get('/search', Stock.searchStock)
router.get('/profile/:id', Stock.getStockProfile)

module.exports = router