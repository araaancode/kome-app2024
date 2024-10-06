// # description -> HTTP VERB -> Accesss -> Access Type
// # get all houses -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/houses
exports.getHouses=(req,res)=>{
    res.send("admin get all houses")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get single house -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/houses/:houseId
exports.getHouse=(req,res)=>{
    res.send("admin get single house")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # active house -> PUT -> SUPER Admin -> PRIVATE
// @route = /api/admins/houses/:houseId/active-house
exports.activeHouse=(req,res)=>{
    res.send("admin active house")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # active house -> PUT -> SUPER Admin -> PRIVATE
// @route = /api/admins/houses/:houseId/deactive-house
exports.deactiveHouse=(req,res)=>{
    res.send("admin deactive house")
}



