const router = require('express').Router()
const Stock = require('../controllers/Stock')
const isUserExist = require('../middlewares/isUserExist')
const auth = require('../middlewares/auth')
const authorized = require('../middlewares/authorized')

router.get('/mostactive', Stock.getMostActiveStock)
router.get('/mostgainer', Stock.getMostGainerStock)
router.get('/search', Stock.searchStock)
router.get('/profile/:id', Stock.getStockProfile)
<<<<<<< HEAD
router.get('/topcurrencies', Stock.getTopCurrencies)
=======
router.get('/trendingnews', Stock.getLatestNews)
router.get('/news', Stock.findNews)

>>>>>>> 8ce11840b3d584ff7bd0a58ead6286b23cbe78f3

router.use(auth)
router.use(isUserExist)

router.post('/add/favorites', Stock.addFavorites)
router.get('/list/favorites', Stock.getFavoriteList)
router.get('/list/favorites/:id', authorized, Stock.getSingleFavoriteData)
router.delete('/delete/favorites/:id', authorized, Stock.deleteFavoriteData)

module.exports = router