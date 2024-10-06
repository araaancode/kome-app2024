const express = require("express")

const router = express()

const ownerCtrls = require("../../controllers/owners/owners")

const ownerMdl = require("../../middlewares/authOwner")

const upload = require("../../utils/upload")

router.get('/me', ownerMdl.authOwner, ownerCtrls.getMe)
router.put('/update-profile', ownerMdl.authOwner, ownerCtrls.updateProfile)
router.put('/update-avatar', ownerMdl.authOwner, upload.ownerAvatarUpload.single("avatar"), ownerCtrls.updateAvatar)

router.get('/notifications', ownerCtrls.notifications)
router.get('/finance', ownerCtrls.finance)
router.get('/my-tickets', ownerCtrls.myTickets)

router.post('/create-house', ownerMdl.authOwner, upload.houseUpload.fields([
    {
        name: "cover",
        maxCount: 1,
    },
    {
        name: "images",
        maxCount: 6,
    },
]), ownerCtrls.createHouse)

router.put('/:houseId/update-house', ownerMdl.authOwner, ownerCtrls.updateHouse)
router.put('/:houseId/update-cover', ownerMdl.authOwner, upload.houseUpload.single("cover"), ownerCtrls.updateCover)
router.put(
    "/:houseId/update-images",
    upload.houseUpload.single("images"),
    ownerCtrls.updateImages
);

module.exports = router