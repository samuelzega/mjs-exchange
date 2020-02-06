const axios = require('axios')

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


}

module.exports = Stock