const { User } = require('../models/index')
const createError = require('http-errors')
// console.log(User)

module.exports = class {
    static register(req, res, next) {
        // console.log(req.body)
        let { email, password, name } = req.body

        User
            .findOne({
                where: {
                    email,
                    password,
                    name
                }
            })
            .then(user => {
                if(user){
                    throw createError('400', 'Email already exist')
                } else {
                    return User.create({ email, password, name })
                }
            })
            .then(created => {
                res.status(201).json(created)
            })
            .catch(err => {
                console.log(err)
            })
    }

    static login(req, res, next) {
        console.log('test')
    }
}
