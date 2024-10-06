const express = require("express")

const router = express()

const adminOwnerCtrls = require("../../controllers/admins/owners")

router.get('/',adminOwnerCtrls.getOwners)
router.get('/:ownerId',adminOwnerCtrls.getOwner)
router.put('/:ownerId/active-owner',adminOwnerCtrls.activeOwner)
router.put('/:ownerId/deactive-owner',adminOwnerCtrls.deactiveOwner)

module.exports = router