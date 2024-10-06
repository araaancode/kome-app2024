const express = require("express")

const router = express()

const adminCookCtrls = require("../../controllers/admins/cooks")

router.get('/',adminCookCtrls.getCooks)
router.get('/:cookId',adminCookCtrls.getCook)
router.put('/:cookId/active-cook',adminCookCtrls.activeCook)
router.put('/:cookId/deactive-cook',adminCookCtrls.deactiveCook)

module.exports = router