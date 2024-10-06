const { StatusCodes } = require('http-status-codes');
const Owner = require("../../models/Owner")
const House = require("../../models/House")

// *** owners apis ***
// # description -> HTTP VERB -> Accesss -> Access Type
// # owner get profile -> GET -> Owner -> PRIVATE
// @route = /api/owners/me
exports.getMe = async (req, res) => {
    try {
        let owner = await Owner.findById(req.owner.id).select('-password')
        if (owner) {
            res.status(200).json({
                status: 'success',
                msg: 'owner fetched',
                owner,
            })
        } else {
            res.status(403).json({
                msg: 'can not fetch owner',
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
        let owner = await Owner.findByIdAndUpdate(req.owner.id, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
        }, { new: true })

        if (owner) {
            res.status(200).json({
                status: 'success',
                msg: 'owner fetched',
                owner,
            })
        } else {
            res.status(403).json({
                msg: 'can not fetch owner',
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
    await Owner.findByIdAndUpdate(req.owner.id, {
        avatar: req.file.filename,
    }).then((doc) => {
        if (doc) {
            res.status(StatusCodes.OK).json({
                status: 'success',
                msg: 'آواتار ملک دار ویرایش شد',
                owner: doc
            });
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: 'آواتار ملک دار ویرایش نشد',
            });
        }
    }).catch((error) => {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: 'خطای داخلی سرور',
        });
    });
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

        if(houseCover){
            houseCover.cover = req.file.filename
            await houseCover.save().then((data)=>{
                if(data){
                    res.status(StatusCodes.OK).json({
                        status:"success",
                        msg:"تصویر ویرایش شد",
                        houseCover
                    })
                }
            }).catch((error)=>{
                res.status(StatusCodes.BAD_REQUEST).json({
                    status:"failure",
                    msg:"تصویر ویرایش نشد",
                    error
                })
            })
           
        }else{
            res.status(StatusCodes.OK).json({
                status:"failure",
                msg:"تصویر پیدا نشد",
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

exports.updateMap = async(req, res) => {
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


exports.notifications = (req, res) => {
    res.send("owner notifications")
}

exports.finance = (req, res) => {
    res.send("owner finance")
}

exports.myTickets = (req, res) => {
    res.send("owner my tickets")
}





