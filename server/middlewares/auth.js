const createError = require('http-errors')
const { verify } = require('../helpers/jwt')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.token
        const authData = verify(token)
        req.user = authData.user
        next()
    } catch (error) {
        next(createError(403, {
            message: {
                error: "Forbidden"
            }
        }))
    }
}