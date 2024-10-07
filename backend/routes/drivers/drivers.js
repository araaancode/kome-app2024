const express = require("express")

const router = express()

const driverCtrls = require("../../controllers/drivers/drivers")

const authDriver = require("../../middlewares/authDriver")

const { driverUpload } = require("../../utils/upload")


// basic profile api
router.get('/me', authDriver, driverCtrls.getMe)
router.put('/update-profile', authDriver, driverUpload.single('avatar'), driverCtrls.updateProfile)
router.put('/update-avatar', authDriver, driverCtrls.updateAvatar)

// notifications
router.get('/notifications', authDriver, driverCtrls.notifications)
router.get('/notifications/:ntfId', authDriver, driverCtrls.notification)
router.post('/notifications', authDriver, driverCtrls.createNotification)
router.put('/notifications/:ntfId/mark-notification', authDriver, driverCtrls.markNotification)

// advertisments


router.get('/finance', authDriver, driverCtrls.finance)
router.get('/my-tickets', authDriver, driverCtrls.myTickets)


module.exports = router