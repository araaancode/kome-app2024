// # description -> HTTP VERB -> Accesss -> Access Type
// # get all bus tickets -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/bus-tickets
exports.getBusTickets=(req,res)=>{
    res.send("admin get all bus tickets")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get single bus ticket -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/bus-tickets/:busticketId
exports.getBusticket=(req,res)=>{
    res.send("admin get single bus ticket")
}


