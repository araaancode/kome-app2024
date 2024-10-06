const express = require("express")

const router = express()

const adminBusTicketCtrls = require("../../controllers/admins/busTickets")

router.get('/',adminBusTicketCtrls.getBusTickets)
router.get('/:busId',adminBusTicketCtrls.getBusticket)


module.exports = router