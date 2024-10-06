const express = require("express")

const router = express()

const adminHouseCtrls = require("../../controllers/admins/houses")

router.get('/',adminHouseCtrls.getHouses)
router.get('/:houseId',adminHouseCtrls.getHouse)
router.put('/:houseId/active-house',adminHouseCtrls.activeHouse)
router.put('/:houseId/deactive-house',adminHouseCtrls.deactiveHouse)

module.exports = router