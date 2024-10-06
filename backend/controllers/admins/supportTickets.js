// # description -> HTTP VERB -> Accesss -> Access Type
// # get all support tickets -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/support-tickets
exports.getSupportTickets=(req,res)=>{
    res.send("admin get all support tickets")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get single support ticket -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/support-tickets/:support-ticketId
exports.getSupportTicket=(req,res)=>{
    res.send("admin get single support ticket")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # answer support ticket -> PUT -> SUPER Admin  -> PRIVATE
// @route = /api/admins/support-tickets/:support-ticketId/answer-ticket
exports.answerSupportTicket=(req,res)=>{
    res.send("admin answer support ticket")
}




