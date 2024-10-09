const express = require("express")

const router = express()

const driverCtrls = require("../../controllers/drivers/drivers")

const authDriver = require("../../middlewares/authDriver")

const { driverUpload, driverAdsPhotosUpload, driverBusPhotosUpload } = require("../../utils/upload")


// basic profile api
router.get('/me', authDriver, driverCtrls.getMe)
router.put('/update-profile', authDriver, driverUpload.single('avatar'), driverCtrls.updateProfile)
router.put('/update-avatar', authDriver, driverUpload.single('avatar'), driverCtrls.updateAvatar)

// notifications
router.get('/notifications', authDriver, driverCtrls.notifications)
router.get('/notifications/:ntfId', authDriver, driverCtrls.notification)
router.post('/notifications', authDriver, driverCtrls.createNotification)
router.put('/notifications/:ntfId/mark-notification', authDriver, driverCtrls.markNotification)

// advertisments
router.get('/ads', authDriver, driverCtrls.allAds)
router.get('/ads/:adsId', authDriver, driverCtrls.singleAds)
router.post('/ads', authDriver, driverAdsPhotosUpload.fields([
    {
        name: "photo",
        maxCount: 1,
    },
    {
        name: "photos",
        maxCount: 6,
    },
]), driverCtrls.createAds)

router.put('/ads/:adsId/update-ads', authDriver, driverCtrls.updateAds)
router.put('/ads/:adsId/update-photo', authDriver, driverAdsPhotosUpload.single("photo"), driverCtrls.updateAdsPhoto)
router.put('/ads/:adsId/update-photos', authDriver, driverAdsPhotosUpload.single("photos"), driverCtrls.updateAdsPhotos)
router.delete('/ads/:adsId', authDriver, driverCtrls.deleteAds)

// support tickets
router.get('/support-tickets', authDriver, driverCtrls.supportTickets)
router.get('/support-tickets/:stId', authDriver, driverCtrls.supportTicket)
router.post('/support-tickets', authDriver, driverCtrls.createSupportTicket)
router.put('/support-tickets/:stId/read', authDriver, driverCtrls.readSupportTicket)
router.put('/support-tickets/:stId/add-comment', authDriver, driverCtrls.addCommentsToSupportTicket)

// bus
router.get('/bus', authDriver, driverCtrls.getDriverBus)
router.post('/bus', authDriver, driverBusPhotosUpload.fields([
    {
        name: "photo",
        maxCount: 1,
    },
    {
        name: "photos",
        maxCount: 6,
    },
]), driverCtrls.addDriverBus)
router.put('/bus/:busId/update-bus', authDriver, driverCtrls.updateDriverBus)
router.put('/bus/:busId/update-photo', authDriver, driverBusPhotosUpload.single('photo'), driverCtrls.updateDriverBusPhoto)
router.put('/bus/:busId/update-photos', authDriver, driverBusPhotosUpload.single('photos'), driverCtrls.updateDriverBusPhotos)



router.get('/finance', authDriver, driverCtrls.finance)

// bus tickets
router.get('/bus-tickets', authDriver, driverCtrls.getBusTickets)


module.exports = router