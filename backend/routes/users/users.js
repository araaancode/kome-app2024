const express = require("express")

const router = express()

const userCtrls = require("../../controllers/users/users")

const protect = require("../../middlewares/authUser")

const { userUpload } = require("../../utils/upload")



// profile
// router.get('/me', protect, userCtrls.getMe)
// router.put('/update-profile', protect, userCtrls.updateProfile)
// router.put('/update-avatar', protect, userUpload.single('avatar'), userCtrls.updateAvatar)

// houses
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
router.get('/foods', userCtrls.getFoods)
router.get('/foods/:foodId', userCtrls.getFood)
router.put('/foods/add-favorite-food', protect, userCtrls.addFavoriteFood)
router.put('/foods/order-food', protect, userCtrls.orderFood)
router.post('/foods/search-foods', userCtrls.searchFoods)
router.delete('/foods/:foodId/delete-favorite-food', protect, userCtrls.deleteFavoriteFood)

// buses
router.get('/buses', userCtrls.getBuses)
router.get('/buses/:busId', userCtrls.getBus)
router.put('/buses/add-favorite-bus', protect, userCtrls.addFavoriteBus)
router.put('/buses/delete-favorite-bus', protect, userCtrls.deleteFavoriteBus)
router.post('/buses/search-buses', userCtrls.searchBuses)
router.post('/buses/book-bus', protect, userCtrls.bookBus)
router.post('/buses/search-one-side-bus-tickets', userCtrls.searchOneSideBusTickes)
router.post('/buses/search-two-side-bus-tickets', userCtrls.searchTwoSideBusTickes)
router.put('/buses/delete-favorite-bus', protect, userCtrls.deleteFavoriteBus)


// 
// router.get('/notifications', userCtrls.notifications)
// router.get('/finance', protect, userCtrls.finance)




// bus 
// router.get('/my-tickets', userCtrls.myTickets)


// router.get('/owners', userCtrls.getOwners)
// router.get('/owners/:ownerId', userCtrls.getOwner)



module.exports = router