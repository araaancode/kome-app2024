const { StatusCodes } = require('http-status-codes');
const OwnerNotification = require("../../models/OwnerNotification")
const Owner = require("../../models/Owner")
const House = require("../../models/House")
const OwnerAds = require("../../models/OwnerAds");
const OwnerSupportTicket = require('../../models/OwnerSupportTicket');

// *** owners apis ***
// # description -> HTTP VERB -> Accesss -> Access Type
// # owner get profile -> GET -> Owner -> PRIVATE
// @route = /api/owners/me
exports.getMe = async (req, res) => {
    try {
        let owner = await Owner.findById(req.owner.id).select('-password')
        if (owner) {
            res.status(StatusCodes.OK).json({
                status: 'success',
                msg: 'ملک دار پیدا شد',
                owner,
            })
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: 'ملک دار پیدا نشد',

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

// *** owners apis ***
// # description -> HTTP VERB -> Accesss -> Access Type
// # owner update profile -> PUT -> Owner -> PRIVATE
// @route = /api/owners/update-profile
exports.updateProfile = async (req, res) => {
    try {
        let owner = await Owner.findByIdAndUpdate(req.owner._id, {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            username: req.body.username,
            nationalCode: req.body.nationalCode,
            province: req.body.province,
            city: req.body.city,
            gender: req.body.gender,
        }, { new: true })

        if (owner) {
            res.status(StatusCodes.OK).json({
                status: 'success',
                msg: 'اطلاعات ملک دار ویرایش شد',
                name: owner.name,
                phone: owner.phone,
                email: owner.email,
                username: owner.username,
                nationalCode: owner.nationalCode,
                province: owner.province,
                city: owner.city,
                gender: owner.gender,
            })
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: 'اطلاعات ملک دار ویرایش نشد',
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

// *** owners apis ***
// # description -> HTTP VERB -> Accesss -> Access Type
// # owner update avatar -> PUT -> Owner -> PRIVATE
// @route = /api/owners/update-avatar
exports.updateAvatar = async (req, res) => {
    console.log(req.owner);

    try {
        await Owner.findByIdAndUpdate(
            req.owner._id,
            {
                avatar: req.file.filename,
            },
            { new: true }
        ).then((owner) => {
            if (owner) {
                res.status(StatusCodes.OK).json({
                    msg: 'آواتار ملک دار ویرایش شد',
                    name: owner.name,
                    phone: owner.phone,
                    email: owner.email,
                    username: owner.username,
                    nationalCode: owner.nationalCode,
                    province: owner.province,
                    city: owner.city,
                    gender: owner.gender,
                    avatar: owner.avatar,
                })
            }
        }).catch(err => {
            console.log(err)
            res.status(StatusCodes.BAD_REQUEST).json({
                msg: 'آواتار ملک دار ویرایش نشد',
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
// # get  owner notifications -> GET -> Owner -> PRIVATE
// @route = /api/owners/notifications
exports.notifications = async (req, res) => {
    try {
        let notifications = await OwnerNotification.find({})
        let findOwnerNotifications = []

        for (let i = 0; i < notifications.length; i++) {
            if (JSON.stringify(notifications[i].reciever) == JSON.stringify(req.owner._id)) {
                findOwnerNotifications.push(notifications[i])
            }
        }

        if (findOwnerNotifications) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "اعلان ها پیدا شد",
                count: findOwnerNotifications.length,
                findOwnerNotifications
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
// @route = /api/owners/notifications/:ntfId
exports.notification = async (req, res) => {
    try {
        let notification = await OwnerNotification.findById(req.params.ntfId)
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
// @route = /api/owners/notifications
exports.createNotification = async (req, res) => {
    try {
        await OwnerNotification.create({
            title: req.body.title,
            message: req.body.message,
            reciever: req.owner._id,
        }).then((data) => {
            res.status(StatusCodes.CREATED).json({
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
// @route = /api/owners/notifications/:ntfId/mark-notification
exports.markNotification = async (req, res) => {
    try {
        await OwnerNotification.findByIdAndUpdate(req.params.ntfId, { read: true }, { new: true }).then((nft) => {
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
// # get all owners ads -> GET -> Owner -> PRIVATE
// @route = /api/owners/ads
exports.allAds = async (req, res) => {
    try {
        let ads = await OwnerAds.find({ owner: req.owner._id }).populate('owner').select('-password')
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
// # get single driver ads -> GET -> A -> PRIVATE
// @route = /api/owners/notifications/:adsId
exports.singleAds = async (req, res) => {
    try {
        let ads = await OwnerAds.findById(req.params.adsId)
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
// # get create owner ads -> POST -> Owner -> PRIVATE
// @route = /api/owners/ads
exports.createAds = async (req, res) => {
    var photos = [];
    if (req.files.photos) {
        req.files.photos.forEach((element) => {
            photos.push(element.filename);
        });
    }

    try {
        await OwnerAds.create({
            owner: req.owner._id,
            company: "6702a7927bfdbe2dde087edd",
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            photo: req.files.photo[0].filename,
            photos,
        }).then((data) => {
            res.status(StatusCodes.CREATED).json({
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
// # update owner ads -> PUT -> Owner -> PRIVATE
// @route = /api/owners/ads/:adsId/update-ads
exports.updateAds = async (req, res) => {
    try {
        await OwnerAds.findByIdAndUpdate(req.params.adsId, {
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
// # update owner ads photo -> PUT -> Owner -> PRIVATE
// @route = /api/owners/ads/:adsId/update-photo
exports.updateAdsPhoto = async (req, res) => {
    try {
        await OwnerAds.findByIdAndUpdate(req.params.adsId, {
            photo: req.file.filename,
        }).then((ads) => {
            if (ads) {
                return res.status(StatusCodes.OK).json({
                    status: 'success',
                    msg: "تصویر اصلی آگهی ویرایش شد",
                    ads
                })
            } else {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    status: 'failure',
                    msg: "تصویر اصلی آگهی ویرایش نشد",
                })
            }
        });
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
// # update owner ads photos -> PUT -> Owner -> PRIVATE
// @route = /api/owners/ads/:adsId/update-photos
exports.updateAdsPhotos = async (req, res) => {
    try {
        await OwnerAds.findByIdAndUpdate(req.params.adsId, {
            photos: req.file.filename,
        }).then((ads) => {
            if (ads) {
                return res.status(StatusCodes.OK).json({
                    status: 'success',
                    msg: "تصاویر آگهی ویرایش شدند",
                    ads
                })
            } else {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    status: 'failure',
                    msg: "تصاویر آگهی ویرایش نشدند",
                })
            }
        });
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
// # delete owner ads -> DELETE -> Owner -> PRIVATE
// @route = /api/owners/ads/:adsId
exports.deleteAds = async (req, res) => {
    try {
        await OwnerAds.findByIdAndDelete(req.params.adsId).then((ads) => {
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
// # get all owners support tickets -> GET -> Owner -> PRIVATE
// @route = /api/owners/support-tickets
exports.supportTickets = async (req, res) => {
    try {
        let tickets = await OwnerSupportTicket.find({})
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
// # get single owners support ticket -> GET -> Owner -> PRIVATE
// @route = /api/owners/support-tickets/:stId
exports.supportTicket = async (req, res) => {
    try {
        let ticket = await OwnerSupportTicket.findById(req.params.stId)
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
// # create owners support ticket -> POST -> Owner -> PRIVATE
// @route = /api/owners/support-tickets
exports.createSupportTicket = async (req, res) => {
    try {
        await OwnerSupportTicket.create({
            title: req.body.title,
            description: req.body.description,
            owner: req.owner._id,
            assignedTo: req.owner._id,
        }).then((data) => {
            res.status(StatusCodes.CREATED).json({
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
// # read support ticket -> PUT -> Owner -> PRIVATE
// @route = /api/owners/support-tickets/:stId/read
exports.readSupportTicket = async (req, res) => {
    try {
        await OwnerSupportTicket.findByIdAndUpdate(req.params.stId, {
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
// # add comments to support ticket -> PUT -> Owner -> PRIVATE
// @route = /api/owners/support-tickets/:stId/add-comment
exports.addCommentsToSupportTicket = async (req, res) => {
    try {
        let supportTicketFound = await OwnerSupportTicket.findById(req.params.stId)
        if (supportTicketFound) {
            let comments = {
                owner: req.owner._id,
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

// # description -> HTTP VERB -> Accesss -> Access Type
// # owner get house -> GET -> Owner -> PRIVATE
// @route = /api/owners/houses
exports.getHouses = async (req, res) => {
    try {
        let houses = await House.find({})
        let findHouses = []

        for (let i = 0; i < houses.length; i++) {
            if (JSON.stringify(req.owner._id) == JSON.stringify(houses[i].owner)) {
                findHouses.push(houses[i])
            }
        }

        if (findHouses) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "خانه ها پیدا شد",
                count: findHouses.length,
                findHouses
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "خانه ها پیدا نشد"
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
// # owner get house -> GET -> Owner -> PRIVATE
// @route = /api/owners/houses/:houseId
exports.getHouse = async (req, res) => {
    try {
        let house = await House.findById(req.params.houseId)
        if (house) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "خانه پیدا شد",
                house
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "خانه پیدا نشد"
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
// # owner create house -> POST -> Owner -> PRIVATE
// @route = /api/owners/houses
exports.createHouse = async (req, res) => {
    try {
        let images = [];
        if (req.files.images) {
            req.files.images.forEach((e) => {
                images.push(e.filename);
            });
        }

        let house = await House.create({
            owner: req.owner.id,
            name: req.body.name,
            province: req.body.province,
            city: req.body.city,
            cover: req.files.cover[0].filename,
            images,
        })

        if (house) {
            res.status(StatusCodes.OK).json({
                status: 'success',
                msg: 'ملک ایجاد شد',
                house
            });
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
// # owner update house -> GET -> Owner -> PRIVATE
// @route = /api/owners/houses/:houseId/update-house
exports.updateHouse = async (req, res) => {
    try {
        let house = await House.findByIdAndUpdate(req.params.houseId, {
            name: req.body.name,
            province: req.body.province,
            city: req.body.city,
            postalCode: req.body.postalCode,
            housePhone: req.body.housePhone,
            meters: req.body.meters,
            description: req.body.description,
            year: req.body.year,
            capacity: req.body.capacity,
            startDay: req.body.startDay,
            endDay: req.body.endDay,
            houseRoles: req.body.houseRoles,
            critrias: req.body.critrias,
            houseType: req.body.houseType,
            checkIn: req.body.checkIn,
            checkOut: req.body.checkOut,
            floor: req.body.floor,
            options: req.body.options,
            heating: req.body.heating,
            cooling: req.body.cooling,
            parking: req.body.parking,
            bill: req.body.bill,
            price: req.body.price,
            houseNumber: req.body.houseNumber,
            hobbies: req.body.hobbies,
            enviornment: req.body.enviornment,
            ownerType: req.body.ownerType,
        }, { new: true })

        if (house) {
            res.status(StatusCodes.OK).json({
                status: 'success',
                msg: 'خانه ویرایش شد',
                house,
            })
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: 'خانه ویرایش نشد',
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
// # owner update house cover -> PUT -> Owner -> PRIVATE
// @route = /api/owners/houses/:houseId/update-cover
exports.updateCover = async (req, res) => {
    try {
        let houseCover = await House.findById(req.params.houseId)

        if (houseCover) {
            houseCover.cover = req.file.filename
            await houseCover.save().then((data) => {
                if (data) {
                    res.status(StatusCodes.OK).json({
                        status: "success",
                        msg: "تصویر ویرایش شد",
                        houseCover
                    })
                }
            }).catch((error) => {
                res.status(StatusCodes.BAD_REQUEST).json({
                    status: "failure",
                    msg: "تصویر ویرایش نشد",
                    error
                })
            })

        } else {
            res.status(StatusCodes.OK).json({
                status: "failure",
                msg: "تصویر پیدا نشد",
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
// # owner update house images -> PUT -> Owner -> PRIVATE
// @route = /api/owners/houses/:houseId/update-images
exports.updateImages = async (req, res) => {
    try {
        await House.findByIdAndUpdate(req.params.houseId, {
            images: req.file.filename,
        }).then((ads) => {
            if (ads) {
                return res.status(StatusCodes.OK).json({
                    status: 'success',
                    msg: "تصاویر خانه ویرایش شدند",
                    ads
                })
            } else {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    status: 'failure',
                    msg: "تصاویر خانه ویرایش نشدند",
                })
            }
        });
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
// # owner update house map -> PUT -> Owner -> PRIVATE
// @route = /api/owners/houses/:houseId/update-map
exports.updateMap = async (req, res) => {
    try {
        let house = await House.findByIdAndUpdate(req.params.houseId, {
            lat: req.body.lat,
            lng: req.body.lng,
        }, { new: true })

        if (house) {
            res.status(200).json({
                status: 'success',
                msg: 'نقشه ویرایش شد',
                house,
            })
        } else {
            res.status(403).json({
                msg: 'نقشه ویرایش نشد',
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
    res.send("owner finance")
}

exports.myTickets = (req, res) => {
    res.send("owner my tickets")
}





