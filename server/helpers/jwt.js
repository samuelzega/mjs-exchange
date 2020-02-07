const jwt = require('jsonwebtoken')

function verify(payload) {
    return jwt.verify(payload, process.env.SECRET_KEY)
}

function generateToken(payload) {
    return jwt.sign(payload, process.env.SECRET_KEY)
}

module.exports = { verify, generateToken }