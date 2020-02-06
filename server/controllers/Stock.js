const axios = require('axios')
const { Favorite } = require('../models/index')

class Stock {

  static getMostActiveStock(req, res, next) {
    const options = {
      url: 'https://financialmodelingprep.com/api/v3/stock/actives',
      method: 'GET'
    }
    axios(options)
      .then(response => {
        res.status(200).json(response.data.mostActiveStock)
      })
      .catch(next)
  }

  static getMostGainerStock(req, res, next) {
    const options = {
      url: 'https://financialmodelingprep.com/api/v3/stock/gainers',
      method: 'GET'
    }
    axios(options)
      .then(response => {
        res.status(200).json(response.data.mostGainerStock)
      })
      .catch(next)
  }

  static searchStock(req, res, next) {
    let query = req.query.query

    const options = {
      url: `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=20`,
      method: 'GET'
    }
    axios(options)
      .then(response => {
        res.status(200).json(response.data)
      })
      .catch(next)
  }

  static getStockProfile(req, res, next) {
    let id = req.params.id

    const options = {
      url: `https://financialmodelingprep.com/api/v3/company/profile/${id}`,
      method: 'GET'
    }
    axios(options)
      .then(response => {
        res.status(200).json(response.data)
      })
      .catch(next)
  }

  static addFavorites(req, res, next) {

    const { stock_code, stock_name, stock_industry, stock_ceo } = req.body

    const objData = {
      stock_code,
      stock_name,
      stock_ceo,
      stock_industry,
      // UserId: req.user.id //tinggal nyalain  kalau dah ada auth
    }

    Favorite
      .create(objData)
      .then(response => {
        res.status(201).json(response)
      })
      .catch(next)

  }

  static findNews(req, res, next){
    let ticker = req.query.tickers

    const options = {
        url: `https://api.unibit.ai/v2/company/news?tickers=${ticker}&accessKey=${process.env.API_KEY_NEWS}&size=10`,
        method: 'GET'
    }
    axios(options)
    .then(response => {
        res.send(response.data)
    })
    .catch(next)
}
}

module.exports = Stock