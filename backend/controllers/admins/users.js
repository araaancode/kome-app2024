const { StatusCodes } = require('http-status-codes');
const User = require("../../models/User")

// # description -> HTTP VERB -> Accesss -> Access Type
// # get all users -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/users
exports.getUsers = async (req, res) => {
    try {
        let users = await User.find({}).select('-password')
        if (users) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                count: users.length,
                msg: "کاربران پیدا شد",
                users: users
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "کاربران پیدا نشد"
            })
        }
    } catch (error) {
        console.error(error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: "خطای داخلی سرور",
            error
        });
    }
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get single user -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/users/:userId
exports.getUser = async (req, res) => {
    try {
        let user = await User.findById(req.params.userId).select('-password')

        if (user) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "کاربر پیدا شد",
                user: user
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "کاربر پیدا نشد"
            })
        }
    } catch (error) {
        console.error(error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: "خطای داخلی سرور",
            error
        });
    }
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # active user -> PUT -> SUPER Admin -> PRIVATE
// @route = /api/admins/users/:userId/active-user
exports.activeUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, { active: true }, { new: true });
        console.log(user);
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({
                status: 'failure',
                msg: "کاربر فعال نشد",
            })
        }
        res.status(StatusCodes.OK).json({
            status: 'failure',
            msg: "کاربر فعال شد",
            user: user
        })
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: "خطای داخلی سرور",
            error
        });
    }
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # active user -> PUT -> SUPER Admin -> PRIVATE
// @route = /api/admins/users/:userId/deactive-user
exports.deactiveUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, { active: false }, { new: true });
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({
                status: 'failure',
                msg: "کاربر غیر فعال نشد",
            })
        }
        res.status(StatusCodes.OK).json({
            status: 'failure',
            msg: "کاربر غیر فعال شد",
            user: user
        })
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: "خطای داخلی سرور",
            error
        });
    }
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # active user -> DELETE -> SUPER Admin -> PRIVATE
// @route = /api/admins/users/:userId
exports.deleteUser = (req, res) => {
    res.send("admin delete user")
}
