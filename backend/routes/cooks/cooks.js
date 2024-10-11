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

// // houses
// router.get('/houses', authCook, cookCtrls.getHouses)
// router.get('/houses/:houseId', authCook, cookCtrls.getHouse)
// router.post('/houses', authCook, upload.houseUpload.fields([
//     {
//         name: "cover",
//         maxCount: 1,
//     },
//     {
//         name: "images",
//         maxCount: 6,
//     },
// ]), cookCtrls.createHouse)

// router.put('/houses/:houseId/update-house', authCook, cookCtrls.updateHouse)
// router.put('/houses/:houseId/update-cover', authCook, upload.houseUpload.single("cover"), cookCtrls.updateCover)
// router.put(
//     "/houses/:houseId/update-images",
//     upload.houseUpload.single("images"),
//     cookCtrls.updateImages
// );

// router.put('/houses/:houseId/update-map', authCook, cookCtrls.updateMap)


// // router.get('/finance', cookCtrls.finance)
// // router.get('/my-tickets', cookCtrls.myTickets)

module.exports = router