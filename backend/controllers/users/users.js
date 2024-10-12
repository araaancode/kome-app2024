const { StatusCodes } = require('http-status-codes');
const House = require("../../models/House")
const User = require("../../models/User")
const Booking = require("../../models/Booking")
const Owner = require("../../models/Owner")
const BusTicket = require("../../models/BusTicket")

// const calculateBookignHousePrice = (housePrice, guestsCount, checkInDate, checkOutDate) => {
//     //    return housePrice * guestsCount * 
//     let checkInMounth = checkInDate.split('-')[1]
//     let checkOutMounth = checkOutDate.split('-')[1]
//     let checkInDay = checkInDate.split('-')[2]
//     let checkOutDay = checkOutDate.split('-')[2]
//     let daysDiffer = 0


//     if(checkOutMounth === checkInMounth){
//         daysDiffer = checkOutDay - checkInDay
//     }else if(checkOutMounth > checkInMounth){
//         daysDiffer = checkOutDay - checkInDay

//     }
// }


exports.getMe = async (req, res) => {
    try {
        let user = await User.findById(req.user._id).populate('favorites').select('-password')
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

// ********************* profile *********************
// # description -> HTTP VERB -> Accesss
// # update user profile -> PUT -> user
exports.updateProfile = async (req, res) => {
    try {
        await User.findByIdAndUpdate(
            req.user._id,
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
                    msg: 'کاربر ویرایش شد',
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

// # description -> HTTP VERB -> Accesss
// # update user avatar -> PUT -> user
exports.updateAvatar = async (req, res) => {
    try {
        await User.findByIdAndUpdate(
            req.user._id,
            {
                avatar: req.file.filename,
            },
            { new: true }
        ).then((user) => {
            if (user) {
                res.status(StatusCodes.OK).json({
                    msg: 'آواتار کاربر ویرایش شد',
                    user,
                })
            }
        }).catch(err => {
            console.log(err)
            res.status(StatusCodes.BAD_REQUEST).json({
                msg: 'آواتار کاربر ویرایش نشد',
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

// ********************* houses *********************

// # description -> HTTP VERB -> Accesss -> Access Type
// # user get houses -> GET -> USER -> PRIVATE
// @route = /api/users/houses
exports.getHouses = async (req, res) => {
    try {
        let houses = await House.find({ isActive: true }).populate('owner')
        if (houses.length > 0) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "خانه ها پیدا شدند",
                count: houses.length,
                houses: houses
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "خانه ها پیدا نشدند"
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
// # user get single house -> GET -> USER -> PRIVATE
// @route = /api/users/houses/:houseId
exports.getHouse = async (req, res) => {
    try {
        let house = await House.findById(req.params.houseId)

        if (house && house.isActive) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "خانه پیدا شد",
                house: house
            })
        } else {
            return res.status(400).json({
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
// # user search houses -> POST -> USER -> PRIVATE
// @route = /api/users/houses/search-houses
exports.searchHouses = async (req, res) => {
    try {
        let houses = await House.find({ city: req.body.city, isActive: true })
        if (houses.length > 0) {
            res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "اقامتگاه هاپیدا شد",
                count: houses.length,
                houses: houses
            });
        } else {
            res.status(StatusCodes.NOT_FOUND).json({
                status: 'failure',
                msg: "اقامتگاهی یافت نشد",
            });
        }

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
// # get favorites houses -> GET -> USER -> PRIVATE
// @route = /api/users/houses/favorite-houses
exports.getFavoriteHouses = async (req, res) => {
    try {
        let user = await User.findById(req.user._id).populate('favoriteHouses')
        if (user.favoriteHouses.length > 0) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "خانه ها پیدا شدند",
                count: user.favoriteHouses.length,
                houses: user.favoriteHouses
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "خانه ها پیدا نشدند"
            })
        }
    } catch (error) {
        console.error(error);
        console.error(error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: "خطای داخلی سرور",
            error
        });
    }
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get single favorite house -> GET -> USER -> PRIVATE
// @route = /api/users/houses/favorite-houses/:houseId
exports.getFavoriteHouse = async (req, res) => {
    try {
        let user = await User.findById(req.user._id).populate('favoriteHouses')
        if (user.favoriteHouses.length > 0) {
            let house = user.favoriteHouses.find(f => f._id == req.params.houseId)

            if (house) {
                return res.status(StatusCodes.OK).json({
                    status: 'success',
                    msg: "خانه پیدا شد",
                    house
                })
            } else {
                return res.status(StatusCodes.OK).json({
                    status: 'success',
                    msg: "خانه پیدا نشد",
                })
            }

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
// # add house to favorites list -> PUT -> USER -> PRIVATE
// @route = /api/users/houses/add-favorite-house
exports.addFavoriteHouse = async (req, res) => {
    try {

        let user = await User.findById({ _id: req.user._id }).select('-password')

        if (user) {
            if (!user.favoriteHouses.includes(req.body.house)) {
                user.favoriteHouses.push(req.body.house)
            }

            else if (user.favoriteHouses.includes(req.body.house)) {
                user.favoriteHouses = user.favoriteHouses.filter((item) => item != req.body.house)
            }

            let newUser = await user.save()

            if (newUser) {
                return res.status(StatusCodes.OK).json({
                    status: 'success',
                    msg: "خانه به لیست مورد علاقه اضافه شد",
                    newUser
                });
            }


        }


    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: "خطای داخلی سرور",
            error
        });
    }
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # delete house from favorites list -> DELETE -> USER -> PRIVATE
// @route = /api/users/houses/add-favorite-house
exports.deleteFavoriteHouse = async (req, res) => {
    try {
        let user = await User.findById(req.user._id).populate('favoriteHouses')
        if (user.favoriteHouses.length > 0) {
            let filterHouses = user.favoriteHouses.filter(f => f._id != req.params.houseId)
            user.favoriteHouses = filterHouses

            let newUser = await user.save()

            if (newUser) {
                res.status(StatusCodes.OK).json({
                    status: 'success',
                    msg: "خانه حذف شد",
                    newUser
                });
            } else {
                res.status(StatusCodes.BAD_REQUEST).json({
                    status: 'failure',
                    msg: "خانه حذف نشد",
                });
            }
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "خانه ها حذف نشد"
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
// # booking house -> POST -> USER -> PRIVATE
// @route = /api/users/houses/book-house
exports.bookHouse = async (req, res) => {

    try {
        let house = await House.findOne({ _id: req.body.house })
        let checkInMounth = new Date(req.body.checkIn).toLocaleDateString().split('/')[0]
        let checkOutMounth = new Date(req.body.checkOut).toLocaleDateString().split('/')[0]

        let checkInDay = new Date(req.body.checkIn).toLocaleDateString().split('/')[1]
        let checkOutDay = new Date(req.body.checkOut).toLocaleDateString().split('/')[1]

        let differ = checkOutMounth - checkInMounth

        let countDays = 0;




        // function compare() {
        //     if (1 <= checkOutMounth <= 6) {
        //         return 31;
        //     } else if (1 <= checkOutMounth <= 11) {
        //         return 30;
        //     } else {
        //         return 29;
        //     }
        // }

        // let base = compare()
        // console.log(base);

        // if (checkInMounth == checkOutMounth) {
        //     countDays = checkOutDay - checkInDay
        // } else if (checkOutMounth > checkInMounth) {
        //     let base = compare()
        //     console.log(base);
        // }


        if (!house || !house.isActive || !house.isAvailable) {
            res.status(StatusCodes.NOT_FOUND).json({
                status: 'failure',
                msg: "اقامتگاه پیدا نشد",
            });
        }
        else {
            // let totalBookingHousePrice = calculateBookignHousePrice(house.price, req.body.guests, req.body.checkIn, req.body.checkOut)

            let newBooking = await Booking.create({
                user: req.user._id,
                owner: house.owner,
                house: house._id,
                // price: Number(house.price) * Number(req.body.guests) * Number(checkOutMounth > checkInMounth ? (checkOutDay > checkInDay ?  (checkOutDay - checkInDay  + 30) : (((checkOutDay - checkInDay) * (-1))  + 30)) : (checkOutMounth == checkInMounth ? (1) : ((checkOutDay - checkInDay)))),
                // price: Number(house.price),
                price: Number(house.price) * Number(req.body.guests) * Number(checkOutDay - checkInDay),
                checkIn: req.body.checkIn,
                checkOut: req.body.checkOut,
                guests: req.body.guests,
            })

            if (newBooking) {
                house.isAvailable = false
                await house.save().then((data) => {
                    res.status(StatusCodes.CREATED).json({
                        status: 'success',
                        msg: "اقامتگاه رزرو شد",
                        booking: newBooking,
                        house: house
                    });
                })
            } else {
                res.status(StatusCodes.BAD_REQUEST).json({
                    status: 'failure',
                    msg: "اقامتگاه رزرو نشد",
                });
            }
        }


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
// # get user booking houses -> GET -> USER -> PRIVATE
// @route = /api/users/houses/bookings
exports.houseBookings = async (req, res) => {
    try {
        let bookings = await Booking.find({ user: req.user._id }).populate("owner house")

        if (bookings) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "رزروها پیدا شدند",
                count: bookings.length,
                bookings: bookings
            })
        } else {
            return res.status(StatusCodes.NOT_FOUND).json({
                status: 'failure',
                msg: "رزروها پیدا نشدند"
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
// # get user booking houses -> GET -> USER -> PRIVATE
// @route = /api/users/houses/bookings/:bookingId
exports.houseBooking = async (req, res) => {
    try {
        let booking = await Booking.find({ user: req.user._id, _id: req.params.bookingId }).populate("owner house")

        if (booking) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "رزرو پیدا شد",
                booking: booking
            })
        } else {
            return res.status(StatusCodes.NOT_FOUND).json({
                status: 'failure',
                msg: "رزرو پیدا نشد"
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

exports.confirmHouseBooking = async (req, res) => {
    try {
        let bookings = await Booking.find({ user: req.user._id })
        let findBooking = bookings.find(booking => booking._id == req.params.bookingId)

        if (findBooking) {
            findBooking.isConfirmed = true
            await findBooking.save().then((booking) => {
                return res.status(StatusCodes.OK).json({
                    status: 'success',
                    msg: "رزرو تایید شد",
                    booking: booking
                })
            }).catch(() => {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    status: 'failure',
                    msg: "رزرو تایید نشد",
                })
            })

        } else {
            return res.status(StatusCodes.NOT_FOUND).json({
                status: 'failure',
                msg: "رزرو پیدا نشد"
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

exports.cancelHouseBooking = async (req, res) => {
    try {
        let bookings = await Booking.find({ user: req.user._id })
        let findBooking = bookings.find(booking => booking._id == req.params.bookingId)

        if (findBooking) {
            findBooking.isConfirmed = false
            await findBooking.save().then((booking) => {
                return res.status(StatusCodes.OK).json({
                    status: 'success',
                    msg: "رزرو لغو شد",
                    booking: booking
                })
            }).catch(() => {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    status: 'failure',
                    msg: "رزرو لغو نشد",
                })
            })

        } else {
            return res.status(StatusCodes.NOT_FOUND).json({
                status: 'failure',
                msg: "رزرو پیدا نشد"
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
// # add review to house -> PUT -> Owner -> PRIVATE
// @route = /api/users/houses/:houseId/add-review
exports.addReviewToHouse = async (req, res) => {
    try {
        let review = {
            user: req.user._id,
            name: req.body.name,
            comment: req.body.comment,
            rating: req.body.rating,
        }

        let house = await House.findByIdAndUpdate(req.params.houseId, {
            $push: {
                reviews: review
            }
        }, { new: true })

        if (house) {
            res.status(StatusCodes.OK).json({
                status: 'success',
                msg: 'نظر افزوده شد',
                house,
            })
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({
                msg: 'نظر افزوده نشد',
            })
        }


    } catch (error) {
        console.error(error);
        console.error(error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: "خطای داخلی سرور",
            error
        });
    }
}


// ********************* foods *********************




// ********************* notifications *********************

exports.notifications = (req, res) => {
    res.send("user notifications")
}


// ********************* finance *********************
exports.finance = (req, res) => {
    res.send("user finance")
}




// ********************* bus and bus ticket *********************

// const Booking = require('../models/Booking');
// const Bus = require('../models/Bus');

// exports.bookTicket = async (req, res) => {
//   try {
//     const { busId, seatsBooked } = req.body;
//     const bus = await Bus.findById(busId);

//     if (!bus) return res.status(404).json({ msg: 'Bus not found' });
//     if (bus.availableSeats < seatsBooked)
//       return res.status(400).json({ msg: 'Not enough seats available' });

//     const totalPrice = bus.price * seatsBooked;

//     bus.availableSeats -= seatsBooked;
//     await bus.save();

//     const booking = new Booking({
//       user: req.user.id,
//       bus: busId,
//       seatsBooked,
//       totalPrice,
//     });

//     await booking.save();
//     res.status(201).json({ msg: 'Ticket booked successfully' });
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// };
exports.createBusTicket = async (req, res) => {
    try {
        await BusTicket.create({
            driver: req.body.driver,
            passengers: req.body.passengers,
            bus: req.body.bus,
            // user: req.user._id,
            user: "6704340bbe3bc73cd9a92af8",
            movingDate: req.body.movingDate,
            hour: req.body.hour,
            firstCity: req.body.firstCity,
            lastCity: req.body.lastCity,
            ticketPrice: req.body.ticketPrice,
            seatNumbers: req.body.seatNumbers,

        }).then((data) => {
            res.status(StatusCodes.CREATED).json({
                status: 'success',
                msg: "بلیط اتوبوس صادر شد",
                data
            })
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

// ********************* owners *********************

exports.getOwners = async (req, res) => {
    try {
        let owners = await Owner.find({}).select('-password -phone -role')
        if (owners.length > 0) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "مالک ها پیدا شدند",
                count: owners.length,
                owners: owners
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "مالک ها پیدا نشدند"
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

exports.getOwner = async (req, res) => {
    try {
        let owner = await Owner.findById(req.params.ownerId).select('-password -phone -role')
        if (owner) {
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "مالک پیدا شد",
                owner: owner
            })
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "مالک پیدا نشد"
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


