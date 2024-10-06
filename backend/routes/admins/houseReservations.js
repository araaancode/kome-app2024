const express = require("express")

const router = express()

const adminHouseReservationCtrls = require("../../controllers/admins/houseReservations")

router.get('/',adminHouseReservationCtrls.getHouseReservations)
router.get('/:houseId',adminHouseReservationCtrls.getHouseReservation)

module.exports = router