const express = require("express")

const router = express()

const adminCtrls = require("../../controllers/admins/admins")

const authAdmin = require("../../middlewares/authAdmin")

const { adminUpload } = require("../../utils/upload")

router.get('/me', authAdmin, adminCtrls.getMe)
router.put('/update-profile', authAdmin, adminCtrls.updateProfile)

router.put('/update-avatar', authAdmin, adminUpload.single('avatar'), adminCtrls.updateAvatar)

router.post('/notifications', authAdmin, adminCtrls.createNotification)
router.get('/notifications', authAdmin, adminCtrls.getNotifications)
router.get('/notifications/:notificationId', authAdmin, adminCtrls.getNotification)
router.put('/notifications/:notificationId/mark', authAdmin, adminCtrls.markNotification)

// router.get('/notifications/:notificationId', adminCtrls.getNotification)

router.get('/finance', authAdmin, adminCtrls.finance)
router.put('/change-admin-role', authAdmin, adminCtrls.changeAdminRole)
router.get('/', authAdmin, adminCtrls.getAdmins)
router.get('/:adminId', authAdmin, adminCtrls.getAdmin)

module.exports = router