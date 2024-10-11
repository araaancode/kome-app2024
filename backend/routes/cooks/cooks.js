const express = require("express")

const router = express()

const cookCtrls = require("../../controllers/cooks/cooks")

const { authCook } = require("../../middlewares/authCook")

const upload = require("../../utils/upload")

// cook profile
router.get('/me', authCook, cookCtrls.getMe)

router.put('/update-profile', authCook, cookCtrls.updateProfile)
router.put('/update-avatar', authCook, upload.ownerAvatarUpload.single("avatar"), cookCtrls.updateAvatar)


// notifications
router.get('/notifications', authCook, cookCtrls.notifications)
router.get('/notifications/:ntfId', authCook, cookCtrls.notification)
router.post('/notifications', authCook, cookCtrls.createNotification)
router.put('/notifications/:ntfId/mark-notification', cookCtrls.markNotification)

// advertisments
router.get('/ads', authCook, cookCtrls.allAds)
router.get('/ads/:adsId', authCook, cookCtrls.singleAds)
router.post('/ads', authCook, upload.cookAdsPhotosUpload.fields([
    {
        name: "photo",
        maxCount: 1,
    },
    {
        name: "photos",
        maxCount: 6,
    },
]), cookCtrls.createAds)

router.put('/ads/:adsId/update-ads', authCook, cookCtrls.updateAds)
router.put('/ads/:adsId/update-photo', authCook, upload.cookAdsPhotosUpload.single("photo"), cookCtrls.updateAdsPhoto)
router.put('/ads/:adsId/update-photos', authCook, upload.cookAdsPhotosUpload.single("photos"), cookCtrls.updateAdsPhotos)
router.delete('/ads/:adsId', authCook, cookCtrls.deleteAds)


// // support tickets
router.get('/support-tickets', authCook, cookCtrls.supportTickets)
router.get('/support-tickets/:stId', authCook, cookCtrls.supportTicket)
router.post('/support-tickets', authCook, cookCtrls.createSupportTicket)
router.put('/support-tickets/:stId/read', authCook, cookCtrls.readSupportTicket)
router.put('/support-tickets/:stId/add-comment', authCook, cookCtrls.addCommentsToSupportTicket)

// foods
router.get('/foods', authCook, cookCtrls.getFoods)
router.get('/foods/:foodId', authCook, cookCtrls.getFood)
router.post('/foods', authCook, upload.foodPhotosUpload.fields([
    {
        name: "photo",
        maxCount: 1,
    },
    {
        name: "photos",
        maxCount: 6,
    },
]), cookCtrls.createFood)
router.put('/foods/:foodId/update-food', authCook, cookCtrls.updateFood)
router.put('/foods/:foodId/update-food-photo', authCook, upload.foodPhotosUpload.single("photo"), cookCtrls.updateFoodPhoto)
router.put('/foods/:foodId/update-food-photos', authCook, upload.foodPhotosUpload.single("photos"), cookCtrls.updateFoodPhotos)
router.delete('/foods/:foodId', authCook, cookCtrls.deleteFood)


// // router.get('/finance', cookCtrls.finance)
// // router.get('/my-tickets', cookCtrls.myTickets)

module.exports = router