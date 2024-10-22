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

router.get('/users/:userId/support-tickets', authAdmin, adminCtrls.getAllUserSupportTickets)
router.get('/users/:userId/support-tickets/:stId', authAdmin, adminCtrls.getSingleUserSupportTicket)
router.put('/users/:userId/support-tickets/:stId/add-comment', authAdmin, adminCtrls.addCommentToUserSupportTicket)


// cooks
router.get('/cooks', authAdmin, adminCtrls.getCooks)
router.get('/cooks/:cookId', authAdmin, adminCtrls.getCook)
router.put('/cooks/:cookId/active', authAdmin, adminCtrls.activeCook)
router.put('/cooks/:cookId/deactive', authAdmin, adminCtrls.deActiveCook)
router.get('/cooks/:cookId/support-tickets', authAdmin, adminCtrls.getAllCookSupportTickets)
router.get('/cooks/:cookId/support-tickets/:stId', authAdmin, adminCtrls.getSingleCookSupportTicket)
router.put('/cooks/:cookId/support-tickets/:stId/add-comment', authAdmin, adminCtrls.addCommentToCookSupportTicket)

// owners
router.get('/owners', authAdmin, adminCtrls.getOwners)
router.get('/owners/:ownerId', authAdmin, adminCtrls.getOwner)
router.put('/owners/:ownerId/active', authAdmin, adminCtrls.activeOwner)
router.put('/owners/:ownerId/deactive', authAdmin, adminCtrls.deActiveOwner)
router.get('/owners/:ownerId/support-tickets', authAdmin, adminCtrls.getAllOwnerSupportTickets)
router.get('/owners/:ownerId/support-tickets/:stId', authAdmin, adminCtrls.getSingleOwnerSupportTicket)
router.put('/owners/:ownerId/support-tickets/:stId/add-comment', authAdmin, adminCtrls.addCommentToOwnerSupportTicket)

// drivers
router.get('/drivers', authAdmin, adminCtrls.getDrivers)
router.get('/drivers/:driverId', authAdmin, adminCtrls.getDriver)
router.put('/drivers/:driverId/active', authAdmin, adminCtrls.activeDriver)
router.put('/drivers/:driverId/deactive', authAdmin, adminCtrls.deActiveDriver)
router.get('/drivers/:driverId/support-tickets', authAdmin, adminCtrls.getAllDriverSupportTickets)
router.get('/drivers/:driverId/support-tickets/:stId', authAdmin, adminCtrls.getSingleDriverSupportTicket)
router.put('/drivers/:driverId/support-tickets/:stId/add-comment', authAdmin, adminCtrls.addCommentToDriverSupportTicket)

// foods
router.get('/foods', authAdmin, adminCtrls.getFoods)
router.get('/foods/:foodId', authAdmin, adminCtrls.getFood)
router.put('/foods/:foodId/active', authAdmin, adminCtrls.activeFood)
router.put('/foods/:foodId/deactive', authAdmin, adminCtrls.deActiveFood)

router.get('/finance', authAdmin, adminCtrls.finance)
router.put('/change-admin-role', authAdmin, adminCtrls.changeAdminRole)
router.get('/', authAdmin, adminCtrls.getAdmins)
router.get('/:adminId', authAdmin, adminCtrls.getAdmin)

module.exports = router