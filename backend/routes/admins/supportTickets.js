const express = require("express")

const router = express()

const adminSupportTicketsCtrls = require("../../controllers/admins/supportTickets")

router.get('/:support-ticketId',adminSupportTicketsCtrls.getSupportTicket)
router.get('/',adminSupportTicketsCtrls.getSupportTickets)
router.put('/:support-ticketId/answer-support-ticket',adminSupportTicketsCtrls.answerSupportTicket)

module.exports = router