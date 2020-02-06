const { User } = require('../models/index')
const createError = require('http-errors')
const bcrypt = require('bcrypt')
const { generateToken } = require('../helpers/jwt')
const axios = require('axios')
// console.log(User)

module.exports = class {
    static register(req, res, next) {
        let { email, password, name } = req.body

        User
            .findOne({
                where: {
                    email,
                }
            })
            .then(user => {
                if (user) {
                    throw createError(400, 'Email already exist')
                } else {
                    return User.create({ email, password, name })
                }
            })
            .then(({ name, email }) => {
                res.status(201).json({ name, email })
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
                if (user && bcrypt.compareSync(password, user.password)) {
                    let result = {
                        id: user.id,
                        email: user.email
                    }

                    let token = generateToken(result)
                    res.status(200).json({ token })
                } else {
                    next(createError(400, 'Incorrect Username or Password'))
                }
            })
            .catch(next)
    }

    static googleLogin(req, res, next) {
        User
            .findOne({
                where: {
                    email: req.payload.email
                }
            })
            .then(user => {
                if (!user) {
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

                let token = generateToken(payload)
                res.status(200).json(token)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static changePassword(req, res, next){
        let { email, password, newPassword } = req.body
        User
            .findOne({
                where: {
                    email: email
                }
            })
            .then(user => {
                if(user && bcrypt.compareSync(password, user.password)){
                    let hash = bcrypt.hashSync(newPassword, 10);
                    newPassword = hash

                    return user.update({
                        password: newPassword
                    })
                } else {
                    throw createError(400, 'Incorrect Username or Password')
                }
            })
            .then(patched => {
                res.status(200).json(patched)
            })
            .catch(next)
    }
}
