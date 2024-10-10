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
// router.get('/ads/:adsId', authDriver, driverCtrls.singleAds)
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

// router.put('/ads/:adsId/update-ads', authDriver, driverCtrls.updateAds)
// router.put('/ads/:adsId/update-photo', authDriver, driverAdsPhotosUpload.single("photo"), driverCtrls.updateAdsPhoto)
// router.put('/ads/:adsId/update-photos', authDriver, driverAdsPhotosUpload.single("photos"), driverCtrls.updateAdsPhotos)
// router.delete('/ads/:adsId', authDriver, driverCtrls.deleteAds)


// houses
router.post('/create-house', authOwner, upload.houseUpload.fields([
    {
        name: "cover",
        maxCount: 1,
    },
    {
        name: "images",
        maxCount: 6,
    },
]), ownerCtrls.createHouse)

router.put('/:houseId/update-house', authOwner, ownerCtrls.updateHouse)
router.put('/:houseId/update-cover', authOwner, upload.houseUpload.single("cover"), ownerCtrls.updateCover)
router.put(
    "/:houseId/update-images",
    upload.houseUpload.single("images"),
    ownerCtrls.updateImages
);



// router.get('/finance', ownerCtrls.finance)
// router.get('/my-tickets', ownerCtrls.myTickets)

module.exports = router