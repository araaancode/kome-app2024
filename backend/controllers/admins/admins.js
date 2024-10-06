const { StatusCodes } = require('http-status-codes');
const Admin = require("../../models/Admin")
const AdminNotification = require("../../models/AdminNotification")


// # description -> HTTP VERB -> Accesss -> Access Type
// # get admin profile -> GET -> Admin -> PRIVATE
// @route = /api/admins/me
exports.getMe = async (req, res) => {
    try {
        let admin = await Admin.findById(req.admin._id)
        if (admin) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "ادمین پیدا شد",
                admin: admin
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "ادمین پیدا نشد"
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
// # update admin profile -> PUT -> Admin -> PRIVATE
// @route = /api/admins/update-profile
exports.updateProfile = async (req, res) => {
    try {
        await Admin.findByIdAndUpdate(
            req.admin._id,
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
                    msg: ' پروفایل ادمین ویرایش شد ',
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
// # update admin avatar -> PUT -> Admin -> PRIVATE
// @route = /api/admins/update-avatar
exports.updateAvatar = async (req, res) => {
    res.send(req.file);
    // try {
    //     await Admin.findByIdAndUpdate(
    //         req.admin._id,
    //         {
    //             avatar: req.file.filename,
    //         },
    //         { new: true }
    //     ).then((admin) => {
    //         if (admin) {
    //             res.status(StatusCodes.OK).json({
    //                 msg: 'آواتار ادمین ویرایش شد',
    //                 admin,
    //             })
    //         }
    //     }).catch(err => {
    //         console.log(err)
    //         res.status(StatusCodes.BAD_REQUEST).json({
    //             msg: 'آواتار ادمین ویرایش نشد',
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
// # create admin notification -> PUT -> Admin -> PRIVATE
// @route = /api/admins/notifications
exports.createNotification = async (req, res) => {
    try {
        const { title, message, reciever } = req.body;
        const notification = new AdminNotification({ title, message, reciever });
        await notification.save();
        res.status(StatusCodes.CREATED).json({
            status: 'success',
            success: true,
            data: notification,
            msg: 'اعلان ایجاد شد',
        });
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            success: false,
            msg: 'اعلان ایجاد نشد',
        });
    }
};

// # description -> HTTP VERB -> Accesss -> Access Type
// # get admin notifications -> GET -> Admin -> PRIVATE
// @route = /api/admins/notifications
exports.getNotifications = async (req, res) => {
    try {
        const notifications = await AdminNotification.find({ reciever: req.admin.id }).sort({ createdAt: -1 });
        res.status(StatusCodes.OK).json({
            status: 'success',
            msg: 'اعلان ها دریافت شدند ',
            success: true,
            count: notifications.length,
            data: notifications,
        });
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: 'failure', success: false, error: err.message });
    }
}


// # description -> HTTP VERB -> Accesss -> Access Type
// # get admin single notification -> GET -> Admin -> PRIVATE
// @route = /api/admins/notifications/:notificationId
exports.getNotification = async(req, res) => {
    try {
        const notification = await AdminNotification.findById({ _id:req.params.notificationId })
        res.status(StatusCodes.OK).json({
            status: 'success',
            msg: 'اعلان دریافت شد ',
            success: true,
            data: notification,
        });
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: 'failure', success: false, error: err.message });
    }
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # mark notification as read -> PUT -> Admin -> PRIVATE
// @route = /api/admins/notifications/:notification/mark
exports.markNotification = async (req, res) => {
    try {
        const { notificationId } = req.params;
        const notification = await AdminNotification.findByIdAndUpdate(
            notificationId,
            { read: true },
            { new: true }
        );
        if (!notification) {
            return res.status(StatusCodes.NOT_FOUND).json({
                status: 'failure',
                msg: 'اعلان خوانده نشد ',
                success: false,
            });
        }
        res.status(StatusCodes.OK).json({
            status: 'success',
            msg: 'اعلان خوانده شد ',
            success: true,
            data: notification
        });
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: 'failure', success: false, error: err.message });
    }
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get admin finance -> GET -> Admin -> PRIVATE
// @route = /api/admins/finance
exports.finance = (req, res) => {
    res.send("admin finance")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get admin finance -> GET -> SUPER Admin -> PRIVATE
// @route = /api/admins/change-admin-role
exports.changeAdminRole = async(req, res) => {
    try {
        await Admin.findByIdAndUpdate(
            req.admin._id,
            {
               role:req.body.role,
            },
            { new: true }
        ).then((user) => {
            if (user) {
                res.status(StatusCodes.OK).json({
                    msg: ' نقش ادمین تغییر کرد ',
                    user,
                })
            }
        }).catch((error) => {
            console.log(error);
            res.status(StatusCodes.BAD_REQUEST).json({
                msg: "نقش تغییر نکرد",
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


// *** admins crud ***
// # description -> HTTP VERB -> Accesss -> Access Type
// # get all admins -> GET -> SUPER Admin -> PRIVATE
// @route = /api/admins
exports.getAdmins = async (req, res) => {
    try {
        let admins = await Admin.find({})
        if (admins) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "ادمین ها پیدا شدند",
                count: admins.length,
                admins: admins
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "ادمین ها پیدا نشدند"
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


// *** admins crud ***
// # description -> HTTP VERB -> Accesss -> Access Type
// # get single admins -> GET -> SUPER Admin -> PRIVATE
// @route = /api/admins/:adminId
exports.getAdmin = async(req, res) => {
    try {
        let admin = await Admin.findById(req.params.adminId)
        if (admin) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "ادمین پیدا شد",
                admin: admin
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "ادمین پیدا نشد"
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


