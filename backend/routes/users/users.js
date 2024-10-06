const express = require("express")

const router = express()

const userCtrls = require("../../controllers/users/users")

const protect = require("../../middlewares/authUser")

const { userUpload } = require("../../utils/upload")

router.get('/owners', userCtrls.getOwners)
router.get('/owners/:ownerId', userCtrls.getOwner)

router.get('/me', protect, userCtrls.getMe)
router.put('/update-profile', protect, userCtrls.updateProfile)
router.put('/update-avatar', protect, userUpload.single('avatar'), userCtrls.updateAvatar)
router.post('/search-houses', userCtrls.searchHouses)
router.post('/book-house', protect, userCtrls.bookHouse)
router.get('/notifications', userCtrls.notifications)
router.get('/finance', userCtrls.finance)
router.get('/my-tickets', userCtrls.myTickets)
router.post('/create-ticket', userCtrls.createTicket)
router.get('/bookings', protect, userCtrls.myBookings)

router.get('/houses', userCtrls.getHouses)
router.get('/houses/:houseId', userCtrls.getHouse)

router.get('/favorites', protect, userCtrls.getFavorites)
router.get('/favorites/:houseId', protect, userCtrls.getFavorite)

router.put('/handle-favorite', protect, userCtrls.handleFavorite)

// router.put('/delete-favorite', protect, userCtrls.deleteFavorite)

router.put('/confirm-booking/:bookingId', protect, userCtrls.confirmBooking)
router.put('/cancel-booking/:bookingId', protect, userCtrls.cancelBooking)

module.exports = router