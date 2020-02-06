const router = require('express').Router()
const Stock = require('../controllers/Stock')

router.get('/mostactive', Stock.getMostActiveStock)
router.get('/mostgainer', Stock.getMostGainerStock)
router.get('/search', Stock.searchStock)
router.get('/profile/:id', Stock.getStockProfile)
router.post('/add/favorites', Stock.addFavorites)
router.get('/list/favorites', Stock.getFavoriteList)
router.get('/list/favorites/:id', Stock.getSingleFavoriteData)
router.delete('/delete/favorites/:id', Stock.deleteFavoriteData)

module.exports = router