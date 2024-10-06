// # description -> HTTP VERB -> Accesss -> Access Type
// # get all house reservations -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/houses-reservations
exports.getHouseReservations=(req,res)=>{
    res.send("admin get all house reservations")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get single house -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/houses-reservations/:house-reservationId
exports.getHouseReservation=(req,res)=>{
    res.send("admin get single house reservation")
}


