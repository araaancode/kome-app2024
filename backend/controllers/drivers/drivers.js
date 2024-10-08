const Driver = require("../../models/Driver")
const DriverNotification = require("../../models/DriverNotification")
const DriverAds = require("../../models/DriverAds")
const DriverSupportTicket = require("../../models/DriverSupportTicket")
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
    try {
        await Driver.findByIdAndUpdate(
            req.driver._id,
            {
                avatar: req.file.filename,
            },
            { new: true }
        ).then((driver) => {
            if (driver) {
                res.status(StatusCodes.OK).json({
                    msg: 'آواتار راننده ویرایش شد',
                    driver,
                })
            }
        }).catch(err => {
            console.log(err)
            res.status(StatusCodes.BAD_REQUEST).json({
                msg: 'آواتار راننده ویرایش نشد',
                err,
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

// # description -> HTTP VERB -> Accesss -> Access Type
// # get all driver ads -> GET -> Driver -> PRIVATE
// @route = /api/drivers/ads
exports.allAds = async (req, res) => {
    try {
        let ads = await DriverAds.find({ driver: req.driver._id }).populate('driver').select('-password')
        if (ads) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "آگهی ها پیدا شد",
                count: ads.length,
                ads
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "آگهی ها پیدا نشد"
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
// # get single driver ads -> GET -> Driver -> PRIVATE
// @route = /api/drivers/ads/:adsId
exports.singleAds = async (req, res) => {
    try {
        let ads = await DriverAds.findById(req.params.adsId).populate('driver')

        if (ads) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "آگهی پیدا شد",
                ads
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "آگهی پیدا نشد"
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
// # get create driver ads -> POST -> Driver -> PRIVATE
// @route = /api/drivers/ads
exports.createAds = async (req, res) => {
    var photos = [];
    if (req.files.photos) {
        req.files.photos.forEach((element) => {
            photos.push(element.filename);
        });
    }

    try {
        await DriverAds.create({
            driver: req.driver._id,
            company: "6702a7927bfdbe2dde087edd",
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            primePhoto: req.files.photo[0].filename,
            photos,
        }).then((data) => {
            res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "آگهی ساخته شد",
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
// # update driver ads -> PUT -> Driver -> PRIVATE
// @route = /api/drivers/ads/:adsId/update-ads
exports.updateAds = async (req, res) => {
    try {
        await DriverAds.findByIdAndUpdate(req.params.adsId, {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
        }, { new: true }).then((ads) => {
            if (ads) {
                return res.status(StatusCodes.OK).json({
                    status: 'success',
                    msg: "آگهی ویرایش شد",
                    ads
                })
            } else {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    status: 'failure',
                    msg: "آگهی ویرایش نشد"
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

// # description -> HTTP VERB -> Accesss -> Access Type
// # update driver ads photo -> PUT -> Driver -> PRIVATE
// @route = /api/drivers/ads/:adsId/update-photo
exports.updateAdsPhoto = async (req, res) => {
    DriverAds.findByIdAndUpdate(req.params.adsId, {
        photo: req.file.filename,
    }).then((err, doc) => {
        if (doc) {
            res.send({
                update: 1,
            });
        } else {
            res.status(400).send({
                err,
            });
        }
    });
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # update driver ads photos -> PUT -> Driver -> PRIVATE
// @route = /api/drivers/ads/:adsId/update-photos
exports.updateAdsPhotos = async (req, res) => {
    DriverAds.findByIdAndUpdate(req.params.adsId, {
        photos: req.file.filename,
    }, { new: true }).then((doc) => {
        if (doc) {
            res.send({
                update: 1,
            });
        } else {
            res.status(400).send({
                err,
            });
        }
    });
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # delete driver ads -> DELETE -> Driver -> PRIVATE
// @route = /api/drivers/ads/:adsId
exports.deleteAds = async (req, res) => {
    try {
        await DriverAds.findByIdAndDelete(req.params.adsId).then((ads) => {
            if (ads) {
                return res.status(StatusCodes.OK).json({
                    status: 'success',
                    msg: "آگهی حذف شد",
                    ads
                })
            } else {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    status: 'failure',
                    msg: "آگهی حذف نشد"
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

// # description -> HTTP VERB -> Accesss -> Access Type
// # get all drivers support tickets -> GET -> Driver -> PRIVATE
// @route = /api/drivers/support-tickets
exports.supportTickets = async (req, res) => {
    try {
        let tickets = await DriverSupportTicket.find({})
        if (tickets) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "تیکت های پشتیبانی پیدا شد",
                count: tickets.length,
                tickets
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "تیکت های پشتیبانی پیدا نشد"
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
// # get single drivers support ticket -> GET -> Driver -> PRIVATE
// @route = /api/drivers/support-tickets/:stId
exports.supportTicket = async (req, res) => {
    try {
        let ticket = await DriverSupportTicket.findById(req.params.stId)
        if (ticket) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "تیکت پشتیبانی پیدا شد",
                ticket
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "تیکت پشتیبانی پیدا نشد"
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
// # create drivers support ticket -> POST -> Driver -> PRIVATE
// @route = /api/drivers/support-tickets
exports.createSupportTicket = async (req, res) => {
    try {
        await DriverSupportTicket.create({
            title: req.body.title,
            description: req.body.description,
            driver: req.driver._id,
            assignedTo: req.driver._id,
        }).then((data) => {
            res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "تیکت پشتیبانی ساخته شد",
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
// # read support ticket -> PUT -> Driver -> PRIVATE
// @route = /api/drivers/support-tickets/:stId/read
exports.readSupportTicket = async (req, res) => {
    try {
        await DriverSupportTicket.findByIdAndUpdate(req.params.stId, {
            isRead: true
        }, { new: true }).then((ticket) => {
            if (ticket) {
                return res.status(StatusCodes.OK).json({
                    status: 'success',
                    msg: "تیکت خوانده شد",
                    ticket
                })
            } else {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    status: 'failure',
                    msg: "تیکت خوانده نشد"
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


// # description -> HTTP VERB -> Accesss -> Access Type
// # add comments to support ticket -> PUT -> Driver -> PRIVATE
// @route = /api/drivers/support-tickets/:stId/add-comment
exports.addCommentsToSupportTicket = async (req, res) => {
    try {
        let supportTicketFound = await DriverSupportTicket.findById(req.params.stId)
        if (supportTicketFound) {
            let comments = {
                driver: req.driver._id,
                comment: req.body.comment
            }

            supportTicketFound.comments.push(comments)


            await supportTicketFound.save().then((ticket) => {
                return res.status(StatusCodes.OK).json({
                    status: 'success',
                    msg: "پاسخ گویی به تیکت",
                    ticket
                })
            }).catch((error) => {
                console.log(error);
                return res.status(StatusCodes.BAD_REQUEST).json({
                    status: 'failure',
                    msg: "عدم پاسخ گویی به تیکت",
                    error
                })
            })
        } else {
            return res.status(StatusCodes.NOT_FOUND).json({
                status: 'failure',
                msg: "تیکت پیدا نشد"
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



exports.finance = (req, res) => {
    res.send("driver finance")
}




