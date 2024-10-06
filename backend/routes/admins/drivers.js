const express = require("express")

const router = express()

const adminDriverCtrls = require("../../controllers/admins/drivers")

router.get('/',adminDriverCtrls.getDrivers)
router.get('/:driverId',adminDriverCtrls.getDriver)
router.put('/:driverId/active-driver',adminDriverCtrls.activeDriver)
router.put('/:driverId/deactive-driver',adminDriverCtrls.deactiveDriver)

module.exports = router