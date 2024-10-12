const express = require("express")

const router = express()

const userCtrls = require("../../controllers/users/users")

const protect = require("../../middlewares/authUser")

const { userUpload } = require("../../utils/upload")



// profile
router.get('/me', protect, userCtrls.getMe)
router.put('/update-profile', protect, userCtrls.updateProfile)
router.put('/update-avatar', protect, userUpload.single('avatar'), userCtrls.updateAvatar)

// // houses
router.get('/houses', userCtrls.getHouses)
router.get('/houses/:houseId', userCtrls.getHouse)
router.post('/houses/search-houses', userCtrls.searchHouses)
router.get('/houses/favorite-houses', protect, userCtrls.getFavoriteHouses)
router.get('/houses/favorite-houses/:houseId', protect, userCtrls.getFavoriteHouse)
router.put('/houses/add-favorite-house', protect, userCtrls.addFavoriteHouse)
router.delete('/houses/delete-favorite-house/:houseId', protect, userCtrls.deleteFavoriteHouse)
router.post('/houses/book-house', protect, userCtrls.bookHouse)
router.get('/houses/bookings', protect, userCtrls.houseBookings)
router.get('/houses/bookings/:bookingId', protect, userCtrls.houseBooking)

router.put('/houses/bookings/:bookingId/confirm-booking', protect, userCtrls.confirmHouseBooking)
router.put('/houses/bookings/:bookingId/cancel-booking', protect, userCtrls.cancelHouseBooking)
router.put('/houses/:houseId/add-review', protect, userCtrls.addReviewToHouse)

// foods
// router.get('/foods',userCtrls.getFoods)



// 
// router.get('/notifications', userCtrls.notifications)
// router.get('/finance', protect, userCtrls.finance)




// bus 
// router.get('/my-tickets', userCtrls.myTickets)
// router.post('/create-bus-ticket', userCtrls.createBusTicket)


// router.get('/owners', userCtrls.getOwners)
// router.get('/owners/:ownerId', userCtrls.getOwner)



module.exports = router