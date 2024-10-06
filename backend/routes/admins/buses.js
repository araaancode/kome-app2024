const express = require("express")

const router = express()

const adminBusCtrls = require("../../controllers/admins/buses")

router.get('/',adminBusCtrls.getBuses)
router.get('/:busId',adminBusCtrls.getBus)
router.put('/:busId/active-bus',adminBusCtrls.activeBus)
router.put('/:busId/deactive-bus',adminBusCtrls.deactiveBus)

module.exports = router