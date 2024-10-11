const { StatusCodes } = require('http-status-codes');
const Cook = require('../models/Cook')
const jwt = require('jsonwebtoken')

exports.authCook = async (req, res, next) => {
    let token = req.cookies.jwt

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            let cook = await Cook.findById(decoded.id).select('-password')
            if (cook && cook.role === 'cook') {
                req.cook = cook
                res.locals.cook = cook
                next()
            } else {
                res.status(StatusCodes.BAD_REQUEST).json({
                    msg: 'invalid token provided',
                })
            }

        } catch (error) {
            res.status(StatusCodes.BAD_REQUEST).json({
                msg: 'authorized has error',
                error,
            })
        }
    }

    if (!token) {
        res.status(StatusCodes.BAD_REQUEST).json({
            msg: 'no token provided',
        })
    }
}
