const express = require("express")

const router = express()

const driverCtrls = require("../../controllers/drivers/drivers")

router.get('/me',driverCtrls.getMe)
router.put('/update-profile',driverCtrls.updateProfile)
router.put('/update-avatar',driverCtrls.updateAvatar)
router.get('/notifications',driverCtrls.notifications)
router.get('/finance',driverCtrls.finance)
router.get('/my-tickets',driverCtrls.myTickets)


module.exports = router