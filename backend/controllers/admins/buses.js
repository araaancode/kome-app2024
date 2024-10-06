// # description -> HTTP VERB -> Accesss -> Access Type
// # get all buses -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/buses
exports.getBuses=(req,res)=>{
    res.send("admin get all buses")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get single bus -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/buses/:busId
exports.getBus=(req,res)=>{
    res.send("admin get single bus")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # active bus -> PUT -> SUPER Admin -> PRIVATE
// @route = /api/admins/buses/:busId/active-bus
exports.activeBus=(req,res)=>{
    res.send("admin active bus")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # active bus -> PUT -> SUPER Admin -> PRIVATE
// @route = /api/admins/buses/:busId/deactive-bus
exports.deactiveBus=(req,res)=>{
    res.send("admin deactive bus")
}



