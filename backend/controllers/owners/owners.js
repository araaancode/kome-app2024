const { StatusCodes } = require('http-status-codes');
const OwnerNotification = require("../../models/OwnerNotification")
const Owner = require("../../models/Owner")
const House = require("../../models/House")
const OwnerAds = require("../../models/OwnerAds")

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

// *** owners apis ***
// # description -> HTTP VERB -> Accesss -> Access Type
// # owner create house -> POST -> Owner -> PRIVATE
// @route = /api/owners/create-house
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


// *** owners apis ***
// # description -> HTTP VERB -> Accesss -> Access Type
// # owner create house -> POST -> Owner -> PRIVATE
// @route = /api/owners/:houseId/update-house
exports.updateHouse = async (req, res) => {
    try {
        let house = await House.findByIdAndUpdate(req.params.houseId, {
            postalCode: req.body.postalCode,
            housePhone: req.body.housePhone,
            meters: req.body.meters,
            description: req.body.description,
            year: req.body.year,
            capicity: req.body.capicity,
            houseRoles: req.body.houseRoles,
            houseType: req.body.houseType,
            critrias: req.body.critrias,
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
            res.status(200).json({
                status: 'success',
                msg: 'house fetched',
                house,
            })
        } else {
            res.status(403).json({
                msg: 'can not fetch house',
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

exports.updateImages = async (req, res) => {
    try {
        let houseImages = await House.findById(req.params.houseId)
        res.send(houseImages)
    } catch (error) {
        console.error(error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: "خطای داخلی سرور",
            error
        });
    }
}

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



// # description -> HTTP VERB -> Accesss -> Access Type
// # get  owner notifications -> GET -> Owner -> PRIVATE
// @route = /api/owners/notifications
exports.notifications = async (req, res) => {
    try {
        let notifications = await OwnerNotification.find({})
        let findOwnerNotifications = []
        
        for (let i = 0; i < notifications.length; i++) {
            if(JSON.stringify(notifications[i].reciever) == JSON.stringify(req.owner._id)){
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


exports.finance = (req, res) => {
    res.send("owner finance")
}

exports.myTickets = (req, res) => {
    res.send("owner my tickets")
}





