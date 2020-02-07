const { User } = require('../models/index')
const createError = require('http-errors')
const { verify } = require('../helpers/jwt')

module.exports = (req, res, next) => {

    const id = verify(req.headers.token).id

    User
        .findOne({
            where: {
                id
            }
        })
        .then(response => {
            if (response == null) {
                throw createError(404, { message: { error: `User Doesn't Exist!` } })
            } else {
                next()
            }
        })
        .catch(next)
}