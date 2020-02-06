const { User } = require('../models/index')
const createError = require('http-errors')
const bcrypt = require('bcrypt')
const jwt = require('../helpers/jwt')
// console.log(User)


module.exports = class {
    static register(req, res, next) {
        // console.log(req.body)
        let { email, password, name } = req.body

        User
            .findOne({
                where: {
                    email,
                }
            })
            .then(user => {
                if(user){
                    throw createError(400, 'Email already exist')
                } else {
                    return User.create({ email, password, name })
                }
            })
            .then(created => {
                res.status(201).json(created)
            })
            .catch(next)
    }

    static login(req, res, next) {
        let { email, password } = req.body

        User
            .findOne({
                where: {
                    email: email
                }
            })
            .then(user => {
                if(user && bcrypt.compareSync(password, user.password)){
                    let result = {
                        id: user.id,
                        email: user.email
                    }

                    let token = jwt.generateToken(result)
                    res.status(200).json( { token })
                } else {
                    next(createError(404, 'Incorrect Username or Password'))
                }
            })
            .catch(next)
    }

    static googleLogin(req, res, next){
        User
            .findOne({
                where: {
                    email: req.payload.email
                }
            })
            .then(user => {
                if(!user){
                    return User.create({
                        username: req.payload.name,
                        email: req.payload.email,
                        password: process.env.PASSWORD_DEFAULT
                    })
                } else {
                    return user
                }
            })
            .then(user => {
                let payload = {
                    id: user.id,
                    email: user.email
                }
                
                let token = jwt.generateToken(payload)
                res.status(200).json(token)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static findNews(req, res, next){
        const baseUrl = `https://api.unibit.ai/v2/company/news?`
        accessKey = `${process.env.API_KEY_NEWS}`
    }
}
