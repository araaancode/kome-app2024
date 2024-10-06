const Owner = require('../models/Owner')
const jwt = require('jsonwebtoken')

exports.authOwner = async (req, res, next) => {
    let token = req.cookies.jwt

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            let owner = await Owner.findById(decoded.id).select('-password')
            if (owner.role === 'owner') {
                req.owner = owner
                res.locals.owner = owner
                next()
            }
        } catch (error) {
            res.status(403).json({
                msg: 'authorized has error',
                error,
            })
        }
    }

    if (!token) {
        res.status(403).json({
            msg: 'no token provided',
        })
    }
}

module.exports = Owner