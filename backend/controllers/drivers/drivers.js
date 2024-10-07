const Driver = require("../../models/Driver")
const DriverNotification = require("../../models/DriverNotification")
const StatusCodes = require("http-status-codes")

// # description -> HTTP VERB -> Accesss -> Access Type
// # get driver profile -> GET -> Driver -> PRIVATE
// @route = /api/drivers/me
exports.getMe = async (req, res) => {
    try {
        let driver = await Driver.findById(req.driver._id)
        if (driver) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "راننده پیدا شد",
                _id: driver._id,
                name: driver.name,
                phone: driver.phone,
                email: driver.email,
                username: driver.username,
                avatar: driver.avatar,
                role: driver.role,
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "راننده پیدا نشد"
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
// # update driver profile -> GET -> Driver -> PRIVATE
// @route = /api/drivers/me
exports.updateProfile = async (req, res) => {
    try {
        await Driver.findByIdAndUpdate(
            req.driver._id,
            {
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                username: req.body.username,
                nationalCode: req.body.nationalCode,
                province: req.body.province,
                city: req.body.city,
                gender: req.body.gender,
            },
            { new: true }
        ).then((user) => {
            if (user) {
                res.status(StatusCodes.OK).json({
                    msg: ' پروفایل راننده ویرایش شد ',
                    user,
                })
            }
        }).catch((error) => {
            console.log(error);
            res.status(StatusCodes.BAD_REQUEST).json({
                msg: "پروفایل ویرایش نشد",
                error: error
            })
        })
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            msg: "خطای داخلی سرور",
            error: error
        })
    }
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # update driver profile -> GET -> Driver -> PRIVATE
// @route = /api/drivers/me
exports.updateAvatar = async (req, res) => {
    res.send(req.file);
    // try {
    //     await Driver.findByIdAndUpdate(
    //         req.driver._id,
    //         {
    //             avatar: req.file.filename,
    //         },
    //         { new: true }
    //     ).then((driver) => {
    //         if (driver) {
    //             res.status(StatusCodes.OK).json({
    //                 msg: 'آواتار راننده ویرایش شد',
    //                 driver,
    //             })
    //         }
    //     }).catch(err => {
    //         console.log(err)
    //         res.status(StatusCodes.BAD_REQUEST).json({
    //             msg: 'آواتار راننده ویرایش نشد',
    //             err,
    //         })
    //     })
    // } catch (error) {
    //     console.log(error);
    //     res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    //         msg: "خطای داخلی سرور",
    //         error: error
    //     })
    // }
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get  driver notifications -> GET -> Driver -> PRIVATE
// @route = /api/drivers/notifications
exports.notifications = async (req, res) => {
    try {
        let notifications = await DriverNotification.find({})
        if (notifications) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "اعلان ها پیدا شد",
                count: notifications.length,
                notifications
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "اعلان ها پیدا نشد"
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
// # get single driver notification -> GET -> Driver -> PRIVATE
// @route = /api/drivers/notifications/:ntfId
exports.notification = async (req, res) => {
    try {
        let notification = await DriverNotification.findById(req.params.ntfId)
        if (notification) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "اعلان پیدا شد",
                notification
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "اعلان پیدا نشد"
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
// # create notification for driver -> POST -> Driver -> PRIVATE
// @route = /api/drivers/notifications
exports.createNotification = async (req, res) => {
    try {
        await DriverNotification.create({
            title: req.body.title,
            message: req.body.message,
            reciever: req.driver._id,
        }).then((data) => {
            res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "اعلان ساخته شد",
                data
            })
        })
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
// # mark driver notification -> GET -> Driver -> PRIVATE
// @route = /api/drivers/notifications/:ntfId/mark-notification
exports.markNotification = async (req, res) => {
    try {
        await DriverNotification.findByIdAndUpdate(req.params.ntfId, { read: true }, { new: true }).then((nft) => {
            if (nft) {
                return res.status(StatusCodes.OK).json({
                    status: 'success',
                    msg: "اعلان خوانده شد",
                    nft
                })
            } else {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    status: 'failure',
                    msg: "اعلان خوانده نشد"
                })
            }
        })

    } catch (error) {
        console.error(error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: "خطای داخلی سرور",
            error
        });
    }
}


exports.finance = (req, res) => {
    res.send("driver finance")
}

exports.myTickets = (req, res) => {
    res.send("driver my tickets")
}


