const express = require("express")

const router = express()

const adminUserCtrls = require("../../controllers/admins/users")

router.get('/',adminUserCtrls.getUsers)
router.get('/:userId',adminUserCtrls.getUser)
router.put('/:userId/active-user',adminUserCtrls.activeUser)
router.put('/:userId/deactive-user',adminUserCtrls.deactiveUser)

module.exports = router