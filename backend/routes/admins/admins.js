const express = require("express")

const router = express()

const adminCtrls = require("../../controllers/admins/admins")

const authAdmin = require("../../middlewares/authAdmin")

const { adminUpload } = require("../../utils/upload")

// profile
router.get('/me', authAdmin, adminCtrls.getMe)
router.put('/update-profile', authAdmin, adminCtrls.updateProfile)
router.put('/update-avatar', authAdmin, adminUpload.single('avatar'), adminCtrls.updateAvatar)

// notifications
router.get('/notifications', authAdmin, adminCtrls.getNotifications)
router.get('/notifications/:notificationId', authAdmin, adminCtrls.getNotification)
router.post('/notifications', adminCtrls.createNotification)
router.put('/notifications/:notificationId/mark', authAdmin, adminCtrls.markNotification)

// users
router.get('/users', authAdmin, adminCtrls.getUsers)
router.get('/users/:userId', authAdmin, adminCtrls.getUser)
router.put('/users/:userId/active', authAdmin, adminCtrls.activeUser)
router.put('/users/:userId/deactive', authAdmin, adminCtrls.deActiveUser)

router.get('/users/support-tickets/:userId', authAdmin, adminCtrls.getAllUserSupportTickets)
router.get('/users/support-tickets/:userId/:stId', authAdmin, adminCtrls.getSingleUserSupportTicket)
router.put('/users/support-tickets/:userId/:stId/add-comment', authAdmin, adminCtrls.addCommentToUserSupportTicket)


// cooks


router.get('/finance', authAdmin, adminCtrls.finance)
router.put('/change-admin-role', authAdmin, adminCtrls.changeAdminRole)
router.get('/', authAdmin, adminCtrls.getAdmins)
router.get('/:adminId', authAdmin, adminCtrls.getAdmin)

module.exports = router