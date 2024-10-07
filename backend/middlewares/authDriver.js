const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Driver = require('../models/Driver')

const authDriver = asyncHandler(async (req, res, next) => {
    let token
    const authHeader = req.headers.authorization


    if (authHeader && authHeader.startsWith('Bearer')) {
        try {
            // extract token from authHeader string
            token = authHeader.split(' ')[1]

            // verified token returns user id
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // find user's obj in db and assign to req.user
            req.driver = await Driver.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            res.status(401)
            throw new Error('Not authorized as driver, invalid token')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not authorized as driver, no token found')
    }
})

module.exports = authDriver