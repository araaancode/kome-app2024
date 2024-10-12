const express = require("express")

const router = express()

const userCtrls = require("../../controllers/users/users")

const protect = require("../../middlewares/authUser")

const { userUpload } = require("../../utils/upload")

// profile
router.get('/me', protect, userCtrls.getMe)
router.put('/update-profile', protect, userCtrls.updateProfile)
router.put('/update-avatar', protect, userUpload.single('avatar'), userCtrls.updateAvatar)

// houses
router.get('/houses', userCtrls.getHouses)
router.get('/houses/:houseId', userCtrls.getHouse)
router.post('/houses/search-houses', userCtrls.searchHouses)
router.get('/houses/favorite-houses', protect, userCtrls.getFavoriteHouses)
// router.get('/favorites/:houseId', protect, userCtrls.getFavorite)
router.put('/houses/add-favorite-house', protect, userCtrls.addFavoriteHouse)
// router.post('/book-house', protect, userCtrls.bookHouse)


// router.get('/notifications', userCtrls.notifications)
// router.get('/finance', protect, userCtrls.finance)

// router.get('/bookings', protect, userCtrls.myBookings)





// router.put('/delete-favorite', protect, userCtrls.deleteFavorite)

// router.put('/confirm-booking/:bookingId', protect, userCtrls.confirmBooking)
// router.put('/cancel-booking/:bookingId', protect, userCtrls.cancelBooking)


// bus ticket
// router.get('/my-tickets', userCtrls.myTickets)
// router.post('/create-bus-ticket', userCtrls.createBusTicket)


// router.get('/owners', userCtrls.getOwners)
// router.get('/owners/:ownerId', userCtrls.getOwner)



module.exports = router