const express = require("express")

const router = express()

const ownerCtrls = require("../../controllers/owners/owners")

const { authOwner } = require("../../middlewares/authOwner")

const upload = require("../../utils/upload")

// owner profile
router.get('/me', authOwner, ownerCtrls.getMe)
router.put('/update-profile', authOwner, ownerCtrls.updateProfile)
router.put('/update-avatar', authOwner, upload.ownerAvatarUpload.single("avatar"), ownerCtrls.updateAvatar)


// notifications
router.get('/notifications', authOwner, ownerCtrls.notifications)
router.get('/notifications/:ntfId', authOwner, ownerCtrls.notification)
router.post('/notifications', authOwner, ownerCtrls.createNotification)
router.put('/notifications/:ntfId/mark-notification', ownerCtrls.markNotification)

// advertisments
router.get('/ads', authOwner, ownerCtrls.allAds)
router.get('/ads/:adsId', authOwner, ownerCtrls.singleAds)
router.post('/ads', authOwner, upload.ownerAdsPhotosUpload.fields([
    {
        name: "photo",
        maxCount: 1,
    },
    {
        name: "photos",
        maxCount: 6,
    },
]), ownerCtrls.createAds)

router.put('/ads/:adsId/update-ads', authOwner, ownerCtrls.updateAds)
router.put('/ads/:adsId/update-photo', authOwner, upload.ownerAdsPhotosUpload.single("photo"), ownerCtrls.updateAdsPhoto)
router.put('/ads/:adsId/update-photos', authOwner, upload.ownerAdsPhotosUpload.single("photos"), ownerCtrls.updateAdsPhotos)
router.delete('/ads/:adsId', authOwner, ownerCtrls.deleteAds)


// support tickets
router.get('/support-tickets', authOwner, ownerCtrls.supportTickets)
router.get('/support-tickets/:stId', authOwner, ownerCtrls.supportTicket)
router.post('/support-tickets', authOwner, ownerCtrls.createSupportTicket)
router.put('/support-tickets/:stId/read', authOwner, ownerCtrls.readSupportTicket)
router.put('/support-tickets/:stId/add-comment', authOwner, ownerCtrls.addCommentsToSupportTicket)

// houses
router.get('/houses', authOwner, ownerCtrls.getHouses)
router.get('/houses/:houseId', authOwner, ownerCtrls.getHouse)
router.post('/houses', authOwner, upload.houseUpload.fields([
    {
        name: "cover",
        maxCount: 1,
    },
    {
        name: "images",
        maxCount: 6,
    },
]), ownerCtrls.createHouse)

router.put('/houses/:houseId/update-house', authOwner, ownerCtrls.updateHouse)
router.put('/houses/:houseId/update-cover', authOwner, upload.houseUpload.single("cover"), ownerCtrls.updateCover)
router.put(
    "/houses/:houseId/update-images",
    upload.houseUpload.single("images"),
    ownerCtrls.updateImages
);

router.put('/houses/:houseId/update-map', authOwner, ownerCtrls.updateMap)


// router.get('/finance', ownerCtrls.finance)
// router.get('/my-tickets', ownerCtrls.myTickets)

module.exports = router